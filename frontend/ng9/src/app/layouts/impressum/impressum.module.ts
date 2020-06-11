import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressumComponent } from './impressum.component';
import { ImpressumRoutingModule } from './impressum-routing-module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [ImpressumComponent],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    ComponentsModule
  ]
})
export class ImpressumModule { }
