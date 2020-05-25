import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {
}
