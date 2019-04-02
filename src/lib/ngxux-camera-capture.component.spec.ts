import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxCameraCaptureComponent } from './ngxux-camera-capture.component';

describe('NgxuxCameraCaptureComponent', () => {
  let component: NgxuxCameraCaptureComponent;
  let fixture: ComponentFixture<NgxuxCameraCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxCameraCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxCameraCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
