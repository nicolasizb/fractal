import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoverHomeComponent } from './components/cover-home/cover-home.component';
import { ButtonCallToActionComponent } from './components/button-call-to-action/button-call-to-action.component';

import { SectionCallToActionComponent } from './components/section-call-to-action/section-call-to-action.component';
import { ProjectModelComponent } from './components/project-model/project-model.component';
import { HeadPageServiceComponent } from './components/head-page-service/head-page-service.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { SectionTriggersComponent } from './components/section-triggers/section-triggers.component';
import { FormComponent } from './components/form/form.component';
import { SliderTestimonialComponent } from './components/slider-testimonial/slider-testimonial.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SectionShortsTriggersComponent } from './components/section-shorts-triggers/section-shorts-triggers.component';
import { ContainerAlliesComponent } from './components/container-allies/container-allies.component';
import { InteractionServiceTwoComponent } from './components/interaction-service-two/interaction-service-two.component';
import { InteractionServiceFourComponent } from './components/interaction-service-four/interaction-service-four.component';

@NgModule({
  declarations: [
    CoverHomeComponent,
    ButtonCallToActionComponent,
    SectionCallToActionComponent,
    ProjectModelComponent,
    ProjectDetailComponent,
    HeadPageComponent,
    SectionTriggersComponent,
    FormComponent,
    SliderTestimonialComponent,
    AccordionComponent,
    HeadPageServiceComponent,
    SectionShortsTriggersComponent,
    ContainerAlliesComponent,
    InteractionServiceTwoComponent,
    InteractionServiceFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CoverHomeComponent,
    ButtonCallToActionComponent,
    SectionCallToActionComponent,
    ProjectModelComponent,
    ProjectDetailComponent,
    HeadPageComponent,
    SectionTriggersComponent,
    FormComponent,
    SliderTestimonialComponent,
    AccordionComponent,
    HeadPageServiceComponent,
    SectionShortsTriggersComponent,
    ContainerAlliesComponent,
    InteractionServiceTwoComponent,
    InteractionServiceFourComponent
  ]
})
export class SharedModule { }
