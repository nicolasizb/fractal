import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectContactFormCivilWorkComponent } from './direct-contact-form-civil-work.component';

const routes: Routes = [
  {
    path: '',
    component: DirectContactFormCivilWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectContactFormCivilWorkRoutingModule { }
