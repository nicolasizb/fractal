import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectContactFormEnergyComponent } from './direct-contact-form-energy.component';

describe('DirectContactFormEnergyComponent', () => {
  let component: DirectContactFormEnergyComponent;
  let fixture: ComponentFixture<DirectContactFormEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectContactFormEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectContactFormEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
