import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectVideo, ProjectPhoto, ProjectDesign, ProjectSocialMedia } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.scss']
})
export class ProjectModelComponent {

  @Input() projectVideo: ProjectVideo = {
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
  
  @Input() projectPhoto: ProjectPhoto = {
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

  @Input() projectDesign: ProjectDesign = {
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

  @Input() projectSocialMedia: ProjectSocialMedia = {
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
  
  @Input() activeVideoListener: boolean = false;
  @Input() activePhotoListener: boolean = false;
  @Input() activeDesignListener: boolean = false;
  @Input() activeSocialMediaListener: boolean = false;
  @Input() activeProjectDetailListener: boolean = false;

  @Output() activeProjectDetail = new EventEmitter<boolean>();
  @Output() projectVideoSelected = new EventEmitter<ProjectVideo>();
  @Output() projectPhotoSelected = new EventEmitter<ProjectPhoto>();
  @Output() projectDesignSelected = new EventEmitter<ProjectDesign>();
  @Output() projectSocialMediaSelected = new EventEmitter<ProjectSocialMedia>();

  showProjectDetailVideo() {
    this.activeProjectDetail.emit(true);
    this.projectVideoSelected.emit(this.projectVideo);

    console.log('IDDD MODEL VIDEO', this.projectVideo);

    this.activeProjectDetailListener = true;
  }

  showProjectDetailPhoto() {
    this.activeProjectDetail.emit(true);
    this.projectPhotoSelected.emit(this.projectPhoto);

    console.log('IDDD MODEL PHOTO', this.projectPhoto);
    this.activeProjectDetailListener = true;
  }

  showProjectDetailDesign() {
    this.activeProjectDetail.emit(true);
    this.projectDesignSelected.emit(this.projectDesign);

    console.log('IDDD MODEL DESIGN', this.projectDesign);
    this.activeProjectDetailListener = true;
  }

  showProjectDetailSocialMedia() {
    this.activeProjectDetail.emit(true);
    this.projectSocialMediaSelected.emit(this.projectSocialMedia);

    console.log('IDDD MODEL SOCIAL MEDIA', this.projectSocialMedia);
    this.activeProjectDetailListener = true;
  }
}
