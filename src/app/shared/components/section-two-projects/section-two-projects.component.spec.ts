import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoProjectsComponent } from './section-two-projects.component';

describe('SectionTwoProjectsComponent', () => {
  let component: SectionTwoProjectsComponent;
  let fixture: ComponentFixture<SectionTwoProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTwoProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTwoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
