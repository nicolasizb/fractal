import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwimmingPoolsComponent } from './swimming-pools.component';

const routes: Routes = [ 
  {
    path: '',
    component: SwimmingPoolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwimmingPoolsRoutingModule { }
