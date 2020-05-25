import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadChildren: () => import('./layouts/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./layouts/edit-document/edit-document.module').then(m => m.EditDocumentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
