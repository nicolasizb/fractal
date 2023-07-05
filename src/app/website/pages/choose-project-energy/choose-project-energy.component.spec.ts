import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProjectEnergyComponent } from './choose-project-energy.component';

describe('ChooseProjectEnergyComponent', () => {
  let component: ChooseProjectEnergyComponent;
  let fixture: ComponentFixture<ChooseProjectEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseProjectEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseProjectEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
