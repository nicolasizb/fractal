import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectEnergyBusinessComponent } from './project-energy-business.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectEnergyBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEnergyBusinessRoutingModule { }
