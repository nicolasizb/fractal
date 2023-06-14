import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenceOperationComponent } from './maintence-operation.component';

describe('MaintenceOperationComponent', () => {
  let component: MaintenceOperationComponent;
  let fixture: ComponentFixture<MaintenceOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenceOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenceOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
