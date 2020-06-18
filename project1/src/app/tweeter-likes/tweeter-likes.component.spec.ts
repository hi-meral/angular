import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweeterLikesComponent } from './tweeter-likes.component';

describe('TweeterLikesComponent', () => {
  let component: TweeterLikesComponent;
  let fixture: ComponentFixture<TweeterLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweeterLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeterLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
