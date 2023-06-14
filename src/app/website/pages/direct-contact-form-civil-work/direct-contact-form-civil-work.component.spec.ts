import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectContactFormCivilWorkComponent } from './direct-contact-form-civil-work.component';

describe('DirectContactFormCivilWorkComponent', () => {
  let component: DirectContactFormCivilWorkComponent;
  let fixture: ComponentFixture<DirectContactFormCivilWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectContactFormCivilWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectContactFormCivilWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
