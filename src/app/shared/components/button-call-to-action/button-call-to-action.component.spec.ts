import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCallToActionComponent } from './button-call-to-action.component';

describe('ButtonCallToActionComponent', () => {
  let component: ButtonCallToActionComponent;
  let fixture: ComponentFixture<ButtonCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCallToActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
