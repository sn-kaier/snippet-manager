import { Apollo } from 'apollo-angular';
import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import firebase from 'firebase';

import * as jwt_decode from 'jwt-decode';
import { UHasuraUserFragment, UMeGQL, UUpdateUserNameGQL } from '../../__generated/user-gql-services';
import { Router } from '@angular/router';

export interface AuthState {
  state: 'in' | 'out' | 'pending' | 'emailNotVerified';
  imageUrl?: string;
  name?: string;
  userId?: string;
  hasuraUser?: UHasuraUserFragment;
}

const EMAIL_NOT_VERIFIED_ERROR = 'Email not verified';
const FAILED_TO_FETCH_CLAIMS_ERROR = 'Email not verified';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly authState = new BehaviorSubject<AuthState>({
    state: 'pending',
  });

  public readonly isLoggedIn$ = this.authState.pipe(map(state => state?.state === 'in'));
  public readonly showHintToLogin = new EventEmitter<void>();
  private user: firebase.User | undefined;

  constructor(
    public afAuth: AngularFireAuth,
    readonly apollo: Apollo,
    private readonly uMeGQL: UMeGQL,
    private readonly updateUserNameGQL: UUpdateUserNameGQL,
    private readonly router: Router,
  ) {
    afAuth.authState.subscribe(async (user) => {
      this.user = user;
      if (user) {
        try {
          await this.getDecodedToken(user);
          this.authState.next({
            state: 'in',
            imageUrl: user.photoURL,
            userId: user.uid,
            name: user.displayName,
          });

          this.fetchUser().then(() => {
            this.checkUpdateUserName().then();
          });
        } catch (e) {
          if (e.message === EMAIL_NOT_VERIFIED_ERROR) {
            this.authState.next({
              state: 'emailNotVerified',
              imageUrl: user.photoURL,
              userId: user.uid,
              name: user.displayName,
            });
            return;
          } else {
            this.authState.next({
              state: 'out',
            });
          }
        }
      } else {
        this.authState.next({
          state: 'out',
        });
      }
    });
  }

  public async getToken(): Promise<string | null> {
    const user = this.user;
    if (!user) {
      return null;
    }
    const { token } = await this.getDecodedToken(user);
    return token;
  }

  private async getDecodedToken(user: firebase.User) {
    let retriesLeft = 4;
    while (!this.user && retriesLeft > 0) {
      await new Promise(resolve => setTimeout(resolve, 300));
      retriesLeft--;
    }

    let token = await user.getIdToken(false);
    let decodedToken: any = jwt_decode(token);
    if (decodedToken.email_verified === false) {
      throw new Error(EMAIL_NOT_VERIFIED_ERROR);
    }

    while (!decodedToken['https://hasura.io/jwt/claims'] && retriesLeft > 0) {
      // wait for the hasura claims to arrive
      await new Promise(resolve => setTimeout(resolve, 300));
      token = await user.getIdToken(true);
      decodedToken = jwt_decode(token);
      retriesLeft--;
    }
    if (!decodedToken['https://hasura.io/jwt/claims']) {
      throw new Error(FAILED_TO_FETCH_CLAIMS_ERROR);
    }
    return { decodedToken, token };
  }

  get authId(): string {
    return this.authState?.value?.userId;
  }

  get isLoggedIn(): boolean {
    return this.authState?.value?.state === 'in';
  }

  waitUntilLoggedIn(): Promise<AuthState> {
    return this.authState
      .pipe(
        filter(s => s.state === 'in'),
        take(1),
      )
      .toPromise();
  }

  async logout() {
    await this.apollo.client.clearStore();
    await this.apollo.client.resetStore();
    await this.afAuth.signOut();
    this.router.navigate(['/feed', 'public']).then();
  }

  showLoginHint() {
    this.showHintToLogin.emit();
  }

  private async fetchUser() {
    // fails after login (token not set?)
    const userRes = await this.uMeGQL.fetch({ authId: this.authState.value.userId }).toPromise();
    const user = userRes.data?.allUsers?.[0];
    this.authState.next({
      ...this.authState.value,
      hasuraUser: user,
    });
  }

  private async checkUpdateUserName() {
    const hasuraUserName = this.authState.value?.hasuraUser?.name;
    const authId = this.authId;
    const name = this.authState.value.name;
    // hasura username initially is empty
    if (hasuraUserName === '' && name) {
      await this.updateUserNameGQL
        .mutate({
          authId,
          name,
        })
        .toPromise();
    }
  }
}
