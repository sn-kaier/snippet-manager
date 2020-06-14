import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import * as jwt_decode from 'jwt-decode';
import { UHasuraUserFragment, UMeGQL, UUpdateUserNameGQL } from '../../__generated/user-gql-services';

export interface AuthState {
  state: 'in' | 'out' | 'pending' | 'emailNotVerified';
  token?: string;
  imageUrl?: string;
  name?: string;
  userId?: string;
  hasuraUser?: UHasuraUserFragment;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly authState = new BehaviorSubject<AuthState>({
    state: 'pending'
  });

  public readonly isLoggedIn$ = this.authState.pipe(map(state => state?.state === 'in'));

  constructor(
    public afAuth: AngularFireAuth,
    readonly apollo: Apollo,
    private readonly uMeGQL: UMeGQL,
    private readonly updateUserNameGQL: UUpdateUserNameGQL
  ) {
    afAuth.authState.subscribe(async s => {
      if (s) {
        let token = await s.getIdToken(true);

        let decodedToken: any = jwt_decode(token);
        let retriesLeft = 3;
        if (decodedToken.email_verified === false) {
          this.authState.next({
            state: 'emailNotVerified',
            imageUrl: s.photoURL,
            token,
            userId: s.uid,
            name: s.displayName
          });
          return;
        }

        while (!decodedToken['https://hasura.io/jwt/claims'] && retriesLeft > 0) {
          // wait for the hasura claims to arrive
          await new Promise(resolve => setTimeout(resolve, 300));
          token = await s.getIdToken(true);
          decodedToken = jwt_decode(token);
          retriesLeft--;
        }

        if (decodedToken['https://hasura.io/jwt/claims']) {
          this.authState.next({
            state: 'in',
            imageUrl: s.photoURL,
            token,
            userId: s.uid,
            name: s.displayName
          });

          this.fetchUser().then(() => {
            this.checkUpdateUserName().then();
          });
        } else {
          this.authState.next({
            state: 'out'
          });
          // TODO: show login failed (connection fails)
        }
      } else {
        this.authState.next({
          state: 'out'
        });
      }
    });
  }

  get authId(): string {
    return this.authState?.value?.userId;
  }

  waitUntilLoggedIn(): Promise<AuthState> {
    return this.authState
      .pipe(
        filter(s => s.state === 'in'),
        take(1)
      )
      .toPromise();
  }

  async logout() {
    await this.apollo.getClient().clearStore();
    await this.apollo.getClient().resetStore();
    await this.afAuth.signOut();
  }

  private async fetchUser() {
    const userRes = await this.uMeGQL.fetch({ authId: this.authState.value.userId }).toPromise();
    const user = userRes.data?.allUsers?.[0];
    this.authState.next({
      ...this.authState.value,
      hasuraUser: user
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
          name
        })
        .toPromise();
    }
  }
}
