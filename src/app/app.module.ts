import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverHomeComponent } from './components/cover-home/cover-home.component';
import { ButtonCallToActionComponent } from './components/button-call-to-action/button-call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SectionCallToActionComponent } from './components/section-call-to-action/section-call-to-action.component';
import { ProjectModelComponent } from './components/project-model/project-model.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { SectionTriggersComponent } from './components/section-triggers/section-triggers.component';
import { ProjectEnergyHouseComponent } from './pages/project-energy-house/project-energy-house.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverHomeComponent,
    ButtonCallToActionComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectsComponent,
    ContactComponent,
    NotFoundComponent,
    FooterComponent,
    SectionCallToActionComponent,
    ProjectModelComponent,
    ProjectDetailComponent,
    HeadPageComponent,
    SectionTriggersComponent,
    ProjectEnergyHouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
