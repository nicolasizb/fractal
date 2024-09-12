import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonCallToActionComponent } from './components/button-call-to-action/button-call-to-action.component';

import { SectionCallToActionComponent } from './components/section-call-to-action/section-call-to-action.component';
import { ProjectModelComponent } from './components/project-model/project-model.component';
import { HeadPageServiceComponent } from './components/head-page-service/head-page-service.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { SectionTriggersComponent } from './components/section-triggers/section-triggers.component';
import { FormComponent } from './components/form/form.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SectionShortsTriggersComponent } from './components/section-shorts-triggers/section-shorts-triggers.component';
import { ContainerAlliesComponent } from './components/container-allies/container-allies.component';
import { InteractionServiceTwoComponent } from './components/interaction-service-two/interaction-service-two.component';
import { InteractionServiceFourComponent } from './components/interaction-service-four/interaction-service-four.component';
import { NavbarServicesComponent } from './components/navbar-services/navbar-services.component';
import { SectionTwoProjectsComponent } from './components/section-two-projects/section-two-projects.component';
import { SectionAutomationComponent } from './components/section-automation/section-automation.component';
import { SliderTransitionComponent } from './components/slider-transition/slider-transition.component';
import { SecServicesComponent } from './components/sec-services/sec-services.component';

@NgModule({
  declarations: [
    ButtonCallToActionComponent,
    SectionCallToActionComponent,
    ProjectModelComponent,
    ProjectDetailComponent,
    HeadPageComponent,
    SectionTriggersComponent,
    FormComponent,
    AccordionComponent,
    HeadPageServiceComponent,
    SectionShortsTriggersComponent,
    ContainerAlliesComponent,
    InteractionServiceTwoComponent,
    InteractionServiceFourComponent,
    NavbarServicesComponent,
    SectionTwoProjectsComponent,
    SectionAutomationComponent,
    SliderTransitionComponent,
    SecServicesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonCallToActionComponent,
    SectionCallToActionComponent,
    ProjectModelComponent,
    ProjectDetailComponent,
    HeadPageComponent,
    SectionTriggersComponent,
    FormComponent,
    AccordionComponent,
    HeadPageServiceComponent,
    SectionShortsTriggersComponent,
    ContainerAlliesComponent,
    InteractionServiceTwoComponent,
    InteractionServiceFourComponent,
    NavbarServicesComponent,
    SectionTwoProjectsComponent,
    SectionAutomationComponent,
    SliderTransitionComponent,
    SecServicesComponent
  ]
})
export class SharedModule { }
