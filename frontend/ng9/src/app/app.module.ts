import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ComponentsModule} from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FeedModule} from './layouts/feed/feed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        ComponentsModule,
        BrowserAnimationsModule,
        FeedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
