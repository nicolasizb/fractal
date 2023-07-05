import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseProjectEnergyRoutingModule } from './choose-project-energy-routing.module';
import { ChooseProjectEnergyComponent } from './choose-project-energy.component';


@NgModule({
  declarations: [
    ChooseProjectEnergyComponent
  ],
  imports: [
    CommonModule,
    ChooseProjectEnergyRoutingModule
  ]
})
export class ChooseProjectEnergyModule { }
