import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShortsTriggersComponent } from './section-shorts-triggers.component';

describe('SectionShortsTriggersComponent', () => {
  let component: SectionShortsTriggersComponent;
  let fixture: ComponentFixture<SectionShortsTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionShortsTriggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionShortsTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
