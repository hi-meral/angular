import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormArrayComponent } from './new-form-array.component';

describe('NewFormArrayComponent', () => {
  let component: NewFormArrayComponent;
  let fixture: ComponentFixture<NewFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
