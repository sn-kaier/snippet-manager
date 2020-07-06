/**
 * In this project routing-module files are named *-routing-module.ts instead of *-routing.module.ts
 * to avoid automated imports in the routing module by the IDE (WebStorm)
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';


const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('./layouts/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./layouts/edit-document/edit-document.module').then(m => m.EditDocumentModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('./layouts/impressum/impressum.module').then(m => m.ImpressumModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/feed/public',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
