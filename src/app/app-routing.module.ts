import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'; 
import { ProjectEnergyHouseComponent } from './pages/project-energy-house/project-energy-house.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'servicios/proyectos-energia-solar/casa',
    component: ProjectEnergyHouseComponent
  },
  {
    path: 'quienes-somos',
    component: AboutUsComponent
  },
  {
    path: 'proyectos',
    component: ProjectsComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
