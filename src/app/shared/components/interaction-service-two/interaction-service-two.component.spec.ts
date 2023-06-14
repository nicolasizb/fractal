import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionServiceTwoComponent } from './interaction-service-two.component';

describe('InteractionServiceTwoComponent', () => {
  let component: InteractionServiceTwoComponent;
  let fixture: ComponentFixture<InteractionServiceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionServiceTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionServiceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
