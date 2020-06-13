import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import * as jwt_decode from 'jwt-decode';

export interface AuthState {
  state: 'in' | 'out' | 'pending';
  token?: string;
  imageUrl?: string;
  name?: string;
  userId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly authState = new BehaviorSubject<AuthState>({
    state: 'pending'
  });

  public readonly userId$ = this.authState.pipe(map(state => state?.userId));
  public readonly isLoggedIn$ = this.authState.pipe(map(state => state?.state === 'in'));

  constructor(public afAuth: AngularFireAuth, readonly apollo: Apollo) {
    afAuth.authState.subscribe(async s => {
      if (s) {
        let token = await s.getIdToken(true);

        let decodedToken = jwt_decode(token);
        while (!decodedToken['https://hasura.io/jwt/claims']) {
          // wait for the hasura claims to arrive
          await new Promise(resolve => setTimeout(resolve, 300));
          token = await s.getIdToken(true);
          decodedToken = jwt_decode(token);
        }

        this.authState.next({
          state: 'in',
          imageUrl: s.photoURL,
          token,
          userId: s.uid,
          name: s.displayName
        });
      } else {
        this.authState.next({
          state: 'out'
        });
      }
    });
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

  get authId(): string {
    return this.authState?.value?.userId;
  }
}
