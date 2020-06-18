import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingBoxExerciseComponent } from './shipping-box-exercise.component';

describe('ShippingBoxExerciseComponent', () => {
  let component: ShippingBoxExerciseComponent;
  let fixture: ComponentFixture<ShippingBoxExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingBoxExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingBoxExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
