import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { NgModule } from '@angular/core';

import { AuthService } from './core/auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { filter, take } from 'rxjs/operators';
import { environment } from '../environments/environment';

@NgModule({
  exports: []
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink, authService: AuthService) {
    const http = httpLink.create({ uri: environment.gqlUrl });

    const auth = setContext(async (_, { __ }) => {
      // Grab token if there is one in storage or hasn't expired
      const state = await authService.authState
        .pipe(
          filter(s => s.state !== 'pending'),
          take(1)
        )
        .toPromise();
      let headers = new HttpHeaders();
      if (state.token) {
        headers = headers.set('Authorization', `Bearer ${state.token}`);
      }
      // Return the headers as usual
      return {
        headers
      };
    });

    apollo.create({
      link: auth.concat(http),
      // other options like cache,
      cache: new InMemoryCache()
    });
  }
}
