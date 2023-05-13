import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectEnergy, ProjectSwimming } from 'src/app/models/testimonial.model';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.scss']
})
export class ProjectModelComponent {

  @Input() projectEnergy: ProjectEnergy = {
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
  
  @Input() projectSwimming: ProjectSwimming = {
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
  
  @Input() activeEnergyListener: boolean = false;
  @Input() activeSwimmingListener: boolean = false;
  @Input() activeProjectDetailListener: boolean = false;

  @Output() activeProjectDetail = new EventEmitter<boolean>();
  @Output() projectEnergySelected = new EventEmitter<ProjectEnergy>();
  @Output() projectSwimmingSelected = new EventEmitter<ProjectSwimming>();

  showProjectDetailEnergy() {
    this.activeProjectDetail.emit(true);
    this.projectEnergySelected.emit(this.projectEnergy);

    console.log('IDDD MODEL ENERGY', this.projectEnergy);

    this.activeProjectDetailListener = true;
  }

  showProjectDetailSwimming() {
    this.activeProjectDetail.emit(true);
    this.projectSwimmingSelected.emit(this.projectSwimming);

    console.log('IDDD MODEL SWIMMING', this.projectSwimming);
    this.activeProjectDetailListener = true;
  }

}
