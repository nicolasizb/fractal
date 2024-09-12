import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectVideo, ProjectPhoto, ProjectDesign, ProjectSocialMedia } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.scss']
})
export class ProjectModelComponent {

  @Input() projectEnergy: ProjectVideo = {
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
  
  @Input() projectSwimming: ProjectPhoto = {
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
  
  @Input() activeEnergyListener: boolean = false;
  @Input() activeSwimmingListener: boolean = false;
  @Input() activeProjectDetailListener: boolean = false;

  @Output() activeProjectDetail = new EventEmitter<boolean>();
  @Output() projectVideoSelected = new EventEmitter<ProjectVideo>();
  @Output() projectPhotoSelected = new EventEmitter<ProjectPhoto>();

  showProjectDetailEnergy() {
    this.activeProjectDetail.emit(true);
    this.projectVideoSelected.emit(this.projectEnergy);

    console.log('IDDD MODEL ENERGY', this.projectEnergy);

    this.activeProjectDetailListener = true;
  }

  showProjectDetailSwimming() {
    this.activeProjectDetail.emit(true);
    this.projectPhotoSelected.emit(this.projectSwimming);

    console.log('IDDD MODEL SWIMMING', this.projectSwimming);
    this.activeProjectDetailListener = true;
  }

}
