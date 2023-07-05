import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {
          title: 'AMP Integral Solutions'
        }
      },
      {
        path: 'quienes-somos',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule),
        data: {
          title: 'Sobre nosotros - AMP Integral Solutions'
        }
      },
      {
        path: 'servicios',
        loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule),
        data: {
          title: 'Servicios - AMP Integral Solutions'
        }
      },
      {
        path:'servicios/proyectos-energia-solar',
        loadChildren: () => import('./pages/choose-project-energy/choose-project-energy.module').then(m => m.ChooseProjectEnergyModule)
      },
      {
        path: 'servicios/proyectos-energia-solar/casa',
        loadChildren: () => import('./pages/project-energy-house/project-energy-house.module').then(m => m.ProjectEnergyHouseModule),
        data: {
          title: 'Proyectos Solares para tu Casa - AMP Integral Solutions'
        }
      },
      {
        path: 'servicios/proyectos-energia-solar/empresa',
        loadChildren: () => import('./pages/project-energy-business/project-energy-business.module').then(m => m.ProjectEnergyBusinessModule),
        data: {
          title: 'Proyectos Solares para tu Empresa - AMP Integral Solutions'
        }
      },
      {
        path: 'servicios/proyectos-energia-solar/contacto',
        loadChildren: () => import('./pages/direct-contact-form-energy/direct-contact-form-energy.module').then(m => m.DirectContactFormEnergyModule),
        data: {
          title: 'Cotiza tu proyecto Solar - AMP Integral Solutions'
        }
      },
      {
        path: 'servicios/obra-civil',
        loadChildren: () => import('./pages/civil-work/civil-work.module').then(m => m.CivilWorkModule),
        data: {
          title: 'Obra Civil - AMP Integral Solutions'
        } 
      },
      {
        path: 'servicios/obra-civil/contacto',
        loadChildren: () => import('../website/pages/direct-contact-form-civil-work/direct-contact-form-civil-work.module').then(m => m.DirectContactFormCivilWorkModule),
        data: {
          title: 'Contacta con nosotros - AMP Integral Solutions'
        } 
      },
      {
        path: 'servicios/operacion-y-mantenimiento',
        loadChildren: () => import('./pages/maintence-operation/maintence-operation.module').then(m => m.MaintenceOperationModule),
        data: {
          title: 'Gestión de activos - AMP Integral Solutions'
        } 
      },
      {
        path: 'servicios/operacion-y-mantenimiento/contacto',
        loadChildren: () => import('./pages/direct-contact-form-asset-managment/direct-contact-form-asset-managment.module').then(m => m.DirectContactFormAssetManagmentModule),
        data: {
          title: 'Contacta con nosotros - AMP Integral Solutions'
        } 
      },
      {
        path: 'servicios/piscinas',
        loadChildren: () => import('./pages/swimming-pools/swimming-pools.module').then(m => m.SwimmingPoolsModule),
        data: {
          title: 'Piscinas - AMP Integral Solutions'
        } 
      },
      {
        path: 'servicios/piscinas/contacto',
        loadChildren: () => import('./pages/direct-contact-form-swimming-pools/direct-contact-form-swimming-pools.module').then(m => m.DirectContactFormSwimmingPoolsModule),
        data: {
          title: 'Contacta con nosotros - AMP Integral Solutions'
        } 
      },
      {
        path: 'proyectos',
        loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule),
        data: {
          title: 'Proyectos implementados - AMP Integral Solutions'
        } 
      },
      {
        path: 'contacto',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
        data: {
          title: 'Contacta con nosotros - AMP Integral Solutions'
        } 
      },
      {
        path: 'preguntas-frecuentes',
        loadChildren: () => import('./pages/frequent-questions/frequent-questions.module').then(m => m.FrequentQuestionsModule),
        data: {
          title: 'Preguntas frecuentes - AMP Integral Solutions'
        } 
      },
      {
        path: '**',
        loadChildren: () => import('./pages/not-found/not-found-routing.module').then(m => m.NotFoundRoutingModule),
        data: {
          title: 'Página no encontrada - AMP Integral Solutions'
        } 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
