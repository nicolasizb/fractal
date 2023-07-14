import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { DataInfoPageService } from 'src/app/services/data-info-page.service';
import { ProjectEnergy, ProjectSwimming } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(
    private dataInfoPageService: DataInfoPageService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  }

  containerHead = {
    title: 'Conoce nuestros proyectos',
    paragraph: 'Somos más que proveedores de tecnología, somos aliados estratégicos en la transformación y optimización de tus espacios.',
    img: '../../../assets/vector/vector-men-water.svg'
  }

  sectionCallToAction = {
    title: 'Potenciando el crecimiento con soluciones personalizadas.',
    paragraph: 'Haz clic en ¡Empecemos! Y conoce al equipo de especialistas que estará a tu disposición.',
    img: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

  containerServiceEnergy: boolean = true;
  navegationContainEnergy: boolean = true;

  containerServiceSwimming: boolean = false;
  navegationContainSwimming: boolean = false;

  containerProductDetail: boolean = false;

  stateDetailEnergy: boolean = false;
  stateDetailSwimming: boolean = false;


  projectEnergySelected: ProjectEnergy = {
    id: 0,
    img: '',
    category: '',
    scale: '',
    descriptionSmall: '',
    descriptionLarge: '',
    details: {
      system: '',
      numberPanels: 0,
      powerPanels: '',
      annualGeneration: ''
    }
  }

  projectSwimmingSelected: ProjectSwimming = {
    id: 0,
    img: '',
    category: '',
    scale: '',
    descriptionSmall: '',
    descriptionLarge: '',
    details: {
      systemWater: '',
      filters: 0,
      space: '',
      maintence: ''
    }
  }

  activeEnergyService(state: boolean) {
    this.containerServiceEnergy = state;
    this.navegationContainEnergy = state;
    
    this.containerServiceSwimming = false;
    this.navegationContainSwimming = false;

    this.containerProductDetail = false;
  }

  activeSwimmingService(state: boolean) {
    this.containerServiceEnergy = false;
    this.navegationContainEnergy = false;

    this.containerServiceSwimming = state;
    this.navegationContainSwimming = state;

    this.containerProductDetail = false;
  }

  activeProjectEnergyDetail(state: boolean) {
    if(state === true) {
      this.containerServiceEnergy = false;
      this.navegationContainEnergy = true;

      this.containerServiceSwimming = false;
      this.navegationContainSwimming = false;

      this.containerProductDetail = true;
      this.stateDetailEnergy = true;
      this.stateDetailSwimming = false;
    } else {
      this.containerProductDetail = false;
    }
  }

  activeProjectSwimmingDetail(state: boolean) {
    if(state === true) {
      this.containerServiceEnergy = false;
      this.navegationContainEnergy = false; 

      this.containerServiceSwimming = false;
      this.navegationContainSwimming = true;

      this.containerProductDetail = true;
      this.stateDetailSwimming = true;
      this.stateDetailEnergy = false;
    } else {
      this.containerProductDetail = false;
    }
  }

  sendProjectEnergyDetail(event: ProjectEnergy) {
    this.projectEnergySelected = event;
  }

  sendProjectSwimmingDetail(event: ProjectSwimming) {
    this.projectSwimmingSelected = event;
  }

  testimonialsEnergy: ProjectEnergy[] = [];
  testimonialsSwimming: ProjectSwimming[] = [];

  ngOnInit(): void {
    this.testimonialsEnergy = this.dataInfoPageService.getTestimonialsEnergy();
    this.testimonialsSwimming = this.dataInfoPageService.getTestimonialsSwimming();
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    }); 
  }
}
