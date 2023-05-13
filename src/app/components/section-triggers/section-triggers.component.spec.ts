import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTriggersComponent } from './section-triggers.component';

describe('SectionTriggersComponent', () => {
  let component: SectionTriggersComponent;
  let fixture: ComponentFixture<SectionTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTriggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
