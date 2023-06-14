import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CivilWorkComponent } from './civil-work.component';

const routes: Routes = [
  {
    path: '',
    component: CivilWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivilWorkRoutingModule { }
