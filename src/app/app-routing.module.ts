import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'; 

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quienes-somos',
    component: AboutUsComponent
  },
  {
    path: 'servicios',
    component: ServicesComponent
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
