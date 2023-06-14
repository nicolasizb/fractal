import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectContactFormSwimmingPoolsComponent } from './direct-contact-form-swimming-pools.component';

describe('DirectContactFormSwimmingPoolsComponent', () => {
  let component: DirectContactFormSwimmingPoolsComponent;
  let fixture: ComponentFixture<DirectContactFormSwimmingPoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectContactFormSwimmingPoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectContactFormSwimmingPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
