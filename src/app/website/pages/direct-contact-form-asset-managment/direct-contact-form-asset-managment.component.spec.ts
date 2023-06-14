import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectContactFormAssetManagmentComponent } from './direct-contact-form-asset-managment.component';

describe('DirectContactFormAssetManagmentComponent', () => {
  let component: DirectContactFormAssetManagmentComponent;
  let fixture: ComponentFixture<DirectContactFormAssetManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectContactFormAssetManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectContactFormAssetManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
