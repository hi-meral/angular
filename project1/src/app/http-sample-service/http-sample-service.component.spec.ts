import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSampleServiceComponent } from './http-sample-service.component';

describe('HttpSampleServiceComponent', () => {
  let component: HttpSampleServiceComponent;
  let fixture: ComponentFixture<HttpSampleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSampleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSampleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
