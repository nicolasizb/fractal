import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

import { DataInfoPageService } from 'src/app/services/data-info-page.service';
import { ProjectPhoto, ProjectDesign, ProjectSocialMedia, ProjectVideo } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(
    private dataInfoPageService: DataInfoPageService,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  containerButtonOne = {
    width: 210,
    height: 48,
    colorBorder: '#11111F',
    backgroundColor: '#F0AE20',
    span: false,
    text: 'Quiero cotizar'
  }

  containerHead = {
    title: 'Conoce nuestros proyectos',
    paragraph: 'Somos más que proveedores de tecnología, somos aliados estratégicos en la transformación y optimización de tus espacios.',
    img: '../../../../assets/vector/fr/identidad-marca.png'
  }

  sectionCallToAction = {
    title: 'Potenciando el crecimiento con soluciones personalizadas.',
    paragraph: 'Haz clic en ¡Empecemos! Y conoce al equipo de especialistas que estará a tu disposición.',
    img: '../../../../assets/vector/vector-women-solar-planet-drop.svg'
  }

  projectVideoSelected: ProjectVideo = {
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
  
  projectPhotoSelected: ProjectDesign = {
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

  projectDesignSelected: ProjectPhoto = {
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

  projectSocialMediaSelected: ProjectSocialMedia = {
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

  containerServiceVideo: boolean = true;
  navegationContainVideo: boolean = true;

  containerServicePhoto: boolean = false;
  navegationContainPhoto: boolean = false;

  containerServiceDesign: boolean = false;
  navegationContainDesign: boolean = false;

  containerServiceSocialMedia: boolean = false;
  navegationContainSocialMedia: boolean = false;

  containerProductDetail: boolean = false;

  stateDetailVideo: boolean = false;
  stateDetailPhoto: boolean = false;
  stateDetailDesign: boolean = false;
  stateDetailSocialMedia: boolean = false;


  activeVideoService(state: boolean) {
    this.containerServiceVideo= state;
    this.navegationContainVideo = state;
    
    this.containerServicePhoto = false;
    this.navegationContainPhoto = false;

    this.containerServiceDesign = false;
    this.navegationContainDesign = false;

    this.containerServiceSocialMedia = false;
    this.navegationContainSocialMedia = false;

    this.containerProductDetail = false;
  }

  activePhotoService(state: boolean) {
    this.containerServiceVideo= false;
    this.navegationContainVideo = false;
    
    this.containerServicePhoto = state;
    this.navegationContainPhoto = state;

    this.containerServiceDesign = false;
    this.navegationContainDesign = false;

    this.containerServiceSocialMedia = false;
    this.navegationContainSocialMedia = false;

    this.containerProductDetail = false;
  }

  activeDesignService(state: boolean) {
    this.containerServiceVideo= false;
    this.navegationContainVideo = false;
    
    this.containerServicePhoto = false;
    this.navegationContainPhoto = false;

    this.containerServiceDesign = state;
    this.navegationContainDesign = state;

    this.containerServiceSocialMedia = false;
    this.navegationContainSocialMedia = false;

    this.containerProductDetail = false;
  }

  activeSocialMediaService(state: boolean) {
    this.containerServiceVideo= false;
    this.navegationContainVideo = false;
    
    this.containerServicePhoto = false;
    this.navegationContainPhoto = false;

    this.containerServiceDesign = false;
    this.navegationContainDesign = false;

    this.containerServiceSocialMedia = state;
    this.navegationContainSocialMedia = state;

    this.containerProductDetail = false;
  }

  activeProjectVideoDetail(state: boolean) {
    if(state === true) {
      this.containerServiceVideo= false;
      this.navegationContainVideo = true;

      this.containerServicePhoto = false;
      this.navegationContainPhoto = false;

      this.containerProductDetail = true;
      this.stateDetailVideo = true;
      this.stateDetailPhoto = false;
    } else {
      this.containerProductDetail = false;
    }
  }

  activeProjectPhotoDetail(state: boolean) {
    if(state === true) {
      this.containerServiceVideo= false;
      this.navegationContainVideo = false; 

      this.containerServicePhoto = false;
      this.navegationContainPhoto = true;

      this.containerProductDetail = true;
      this.stateDetailPhoto = true;
      this.stateDetailVideo = false;
    } else {
      this.containerProductDetail = false;
    }
  }

  activeProjectDesignDetail(state: boolean) {
    if(state === true) {
      this.containerServiceVideo= false;
      this.navegationContainVideo = false; 

      this.containerServicePhoto = false;
      this.navegationContainPhoto = true;

      this.containerProductDetail = true;
      this.stateDetailPhoto = true;
      this.stateDetailVideo = false;
    } else {
      this.containerProductDetail = false;
    }
  }

  activeProjectSocialMediaDetail(state: boolean) {
    if(state === true) {
      this.containerServiceVideo= false;
      this.navegationContainVideo = false; 

      this.containerServicePhoto = false;
      this.navegationContainPhoto = true;

      this.containerProductDetail = true;
      this.stateDetailPhoto = true;
      this.stateDetailVideo = false;
    } else {
      this.containerProductDetail = false;
    }
  }

  sendProjectEnergyDetail(event: ProjectVideo) {
    this.projectVideoSelected = event;
  }

  sendProjectPhotoDetail(event: ProjectPhoto) {
    this.projectPhotoSelected = event;
  }

  sendProjectDesignDetail(event: ProjectDesign) {
    this.projectDesignSelected = event;
  }

  sendProjectSocialMediaDetail(event: ProjectSocialMedia) {
    this.projectSocialMediaSelected = event;
  }

  testimonialsVideo: ProjectVideo[] = [];
  testimonialsPhoto: ProjectPhoto[] = [];

  backSelectProjects() {
    window.scrollTo(0, 380);
  }

  ngOnInit(): void {
    this.testimonialsVideo = this.dataInfoPageService.getTestimonialsEnergy();
    this.testimonialsPhoto = this.dataInfoPageService.getTestimonialsSwimming();
    this.route.data.subscribe(data => {
      const pageTitle = data['title'];
      this.titleService.setTitle(pageTitle);
    });
  }
}
