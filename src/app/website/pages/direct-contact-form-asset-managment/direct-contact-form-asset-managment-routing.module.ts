import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectContactFormAssetManagmentComponent } from './direct-contact-form-asset-managment.component';

const routes: Routes = [
  {
    path: '',
    component: DirectContactFormAssetManagmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectContactFormAssetManagmentRoutingModule { }
