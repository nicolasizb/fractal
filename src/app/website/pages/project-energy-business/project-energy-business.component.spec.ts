import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEnergyBusinessComponent } from './project-energy-business.component';

describe('ProjectEnergyBusinessComponent', () => {
  let component: ProjectEnergyBusinessComponent;
  let fixture: ComponentFixture<ProjectEnergyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEnergyBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEnergyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
