import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';

import { LayoutComponent } from './pages/layout/layout.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectEnergyHouseComponent } from './pages/project-energy-house/project-energy-house.component';
import { FrequentQuestionsComponent } from './pages/frequent-questions/frequent-questions.component';
import { ProjectEnergyBusinessComponent } from './pages/project-energy-business/project-energy-business.component';
import { CivilWorkComponent } from './pages/civil-work/civil-work.component';
import { MaintenceOperationComponent } from './pages/maintence-operation/maintence-operation.component';
import { SwimmingPoolsComponent } from './pages/swimming-pools/swimming-pools.component';
import { DirectContactFormEnergyComponent } from './pages/direct-contact-form-energy/direct-contact-form-energy.component';
import { DirectContactFormCivilWorkComponent } from './pages/direct-contact-form-civil-work/direct-contact-form-civil-work.component';
import { DirectContactFormAssetManagmentComponent } from './pages/direct-contact-form-asset-managment/direct-contact-form-asset-managment.component';
import { DirectContactFormSwimmingPoolsComponent } from './pages/direct-contact-form-swimming-pools/direct-contact-form-swimming-pools.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectsComponent,
    ProjectEnergyHouseComponent,
    FooterComponent,
    FrequentQuestionsComponent,
    ProjectEnergyBusinessComponent,
    CivilWorkComponent,
    MaintenceOperationComponent,
    SwimmingPoolsComponent,
    DirectContactFormEnergyComponent,
    DirectContactFormCivilWorkComponent,
    DirectContactFormAssetManagmentComponent,
    DirectContactFormSwimmingPoolsComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule, 
    QuicklinkModule
  ]
})
export class WebsiteModule { }
