import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AuthService } from './core/auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { filter, take } from 'rxjs/operators';
import { environment } from '../environments/environment';

@NgModule({
  exports: [ApolloModule, HttpLinkModule]
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
      cache: new InMemoryCache({ dataIdFromObject: value => value.id })
    });
  }
}
