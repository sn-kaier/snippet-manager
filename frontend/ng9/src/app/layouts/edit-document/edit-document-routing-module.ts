import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditDocumentComponent } from './edit-document/edit-document.component';

const routes: Routes = [
  {
    path: ':id',
    component: EditDocumentComponent
  },
  {
    path: '',
    component: EditDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDocumentRoutingModule {
}
