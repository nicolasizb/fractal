import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChooseProjectEnergyComponent } from './choose-project-energy.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseProjectEnergyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseProjectEnergyRoutingModule { }
