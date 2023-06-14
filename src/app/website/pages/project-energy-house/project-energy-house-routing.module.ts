import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectEnergyHouseComponent } from './project-energy-house.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectEnergyHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEnergyHouseRoutingModule { }
