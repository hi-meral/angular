import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormExerciseComponent } from './template-form-exercise.component';

describe('TemplateFormExerciseComponent', () => {
  let component: TemplateFormExerciseComponent;
  let fixture: ComponentFixture<TemplateFormExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
