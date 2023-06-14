import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectContactFormSwimmingPoolsComponent } from './direct-contact-form-swimming-pools.component';

const routes: Routes = [
  {
    path: '',
    component: DirectContactFormSwimmingPoolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectContactFormSwimmingPoolsRoutingModule { }
