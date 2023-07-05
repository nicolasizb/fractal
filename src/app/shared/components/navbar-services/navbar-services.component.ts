import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar-services',
  templateUrl: './navbar-services.component.html',
  styleUrls: ['./navbar-services.component.scss']
})
export class NavbarServicesComponent {
  containerButton = {
    width: 210,
    height: 48,
    colorBorder: '#212129',
    backgroundColor: '#F0AE20'
  }
  selectTextOne = "¡Cotizar ahora!";
  
  @Input() menuButtonStatusListener: boolean = false;
  @Output() menuButtonStatus = new EventEmitter<boolean>();

  containerServiceText: boolean = false;
  containerServicesContainer: boolean = false;
  containerChooseProject: boolean = false;
  containerProjectScaleEnergy: boolean = false;
  containerProjectScaleSwimming: boolean = false;
  iconActiveProjectsChoose: boolean = false;
  iconActiveProjectEnergy: boolean = false;

  constructor(private router: Router) {
  }

  toggleMenu() {
    this.menuButtonStatusListener = !this.menuButtonStatusListener;
  }

  clickEventRouterLink() {
    this.menuButtonStatusListener = false;
    this.menuButtonStatus.emit(this.menuButtonStatusListener);
  }

  toggleContainerServices() {
    this.containerServiceText = !this.containerServiceText;
    this.containerServicesContainer = !this.containerServicesContainer;
  }

  toggleContainerChooseProject() {
    this.containerChooseProject = !this.containerChooseProject;
    this.iconActiveProjectsChoose = !this.iconActiveProjectsChoose;
  }

  toggleContainerProjectScaleEnergy() {
    this.containerProjectScaleEnergy = !this.containerProjectScaleEnergy;
    this.iconActiveProjectEnergy = !this.iconActiveProjectEnergy;
  }

  clickPage() {
    this.containerServiceText = false;
    this.containerServicesContainer = false;
  }


  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
