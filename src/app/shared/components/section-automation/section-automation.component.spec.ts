import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAutomationComponent } from './section-automation.component';

describe('SectionAutomationComponent', () => {
  let component: SectionAutomationComponent;
  let fixture: ComponentFixture<SectionAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
