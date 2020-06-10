import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImpressumComponent } from './impressum.component';

const routes: Routes = [
  {
    path: '',
    component: ImpressumComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressumRoutingModule {
}
