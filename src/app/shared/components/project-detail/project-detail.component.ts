import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectPhoto, ProjectDesign, ProjectSocialMedia, ProjectVideo } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  @Input() projectVideoSelectedListener: ProjectVideo = {
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
  @Input() projectPhotoSelectedListener: ProjectPhoto = {
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

  @Input() projectDesignSelectedListener: ProjectDesign = {
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

  @Input() projectSocialMediaSelectedListener: ProjectSocialMedia = {
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

  @Input() stateDetailVideoListener: boolean = false;
  @Input() stateDetailPhotoListener: boolean = false;
  @Input() stateDetailDesignListener: boolean = false;
  @Input() stateDetailSocialMediaListener: boolean = false;

  @Output() hideContainerVideo = new EventEmitter<boolean>();
  @Output() hideContainerPhoto = new EventEmitter<boolean>();
  @Output() hideContainerDesign = new EventEmitter<boolean>();
  @Output() hideContainerSocialMedia = new EventEmitter<boolean>();

  @Output() hideContainerProjectDetail = new EventEmitter<boolean>();

  hideProjectVideoDetail() {
    this.hideContainerVideo.emit(true);
    this.hideContainerProjectDetail.emit(false);
  }

  hideProjectPhotoDetail() {
    this.hideContainerPhoto.emit(true);
    this.hideContainerProjectDetail.emit(false);
  }

  hideProjectDesignDetail() {
    this.hideContainerDesign.emit(true);
    this.hideContainerProjectDetail.emit(false);
  }

  hideProjectSocialMediaDetail() {
    this.hideContainerSocialMedia.emit(true);
    this.hideContainerProjectDetail.emit(false);
  }
}
