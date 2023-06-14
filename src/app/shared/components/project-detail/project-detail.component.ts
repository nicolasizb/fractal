import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectEnergy, ProjectSwimming } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  @Input() projectEnergySelectedListener: ProjectEnergy = {
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
  @Input() projectSwimmingSelectedListener: ProjectSwimming = {
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

  @Input() stateDetailEnergyListener: boolean = false;
  @Input() stateDetailSwimmingListener: boolean = false;

  @Output() hideContainerEnergy = new EventEmitter<boolean>();
  @Output() hideContainerSwimming = new EventEmitter<boolean>();

  @Output() hideContainerProjectDetail = new EventEmitter<boolean>();

  hideProjectEnergyDetail() {
    this.hideContainerEnergy.emit(true);
    this.hideContainerProjectDetail.emit(false);
  }

  hideProjectSwimmingDetail() {
    this.hideContainerSwimming.emit(true);
    this.hideContainerProjectDetail.emit(false);
  }
}
