import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPageServiceComponent } from './head-page-service.component';

describe('HeadPageServiceComponent', () => {
  let component: HeadPageServiceComponent;
  let fixture: ComponentFixture<HeadPageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadPageServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadPageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
