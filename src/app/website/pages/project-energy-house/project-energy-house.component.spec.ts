import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEnergyHouseComponent } from './project-energy-house.component';

describe('ProjectEnergyHouseComponent', () => {
  let component: ProjectEnergyHouseComponent;
  let fixture: ComponentFixture<ProjectEnergyHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEnergyHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEnergyHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
