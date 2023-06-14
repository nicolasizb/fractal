import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingPoolsComponent } from './swimming-pools.component';

describe('SwimmingPoolsComponent', () => {
  let component: SwimmingPoolsComponent;
  let fixture: ComponentFixture<SwimmingPoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwimmingPoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwimmingPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
