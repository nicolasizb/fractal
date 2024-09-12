import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecServicesComponent } from './sec-services.component';

describe('SecServicesComponent', () => {
  let component: SecServicesComponent;
  let fixture: ComponentFixture<SecServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
