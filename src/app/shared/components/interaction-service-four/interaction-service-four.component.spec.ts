import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionServiceFourComponent } from './interaction-service-four.component';

describe('InteractionServiceFourComponent', () => {
  let component: InteractionServiceFourComponent;
  let fixture: ComponentFixture<InteractionServiceFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionServiceFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionServiceFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
