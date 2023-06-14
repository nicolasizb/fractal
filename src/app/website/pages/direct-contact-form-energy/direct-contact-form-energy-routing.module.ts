import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectContactFormEnergyComponent } from './direct-contact-form-energy.component';

const routes: Routes = [
  {
    path: '',
    component: DirectContactFormEnergyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectContactFormEnergyRoutingModule { }
