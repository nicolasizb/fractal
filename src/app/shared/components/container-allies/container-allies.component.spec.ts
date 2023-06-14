import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAlliesComponent } from './container-allies.component';

describe('ContainerAlliesComponent', () => {
  let component: ContainerAlliesComponent;
  let fixture: ComponentFixture<ContainerAlliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAlliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
