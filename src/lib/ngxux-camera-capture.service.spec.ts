import { TestBed } from '@angular/core/testing';

import { NgxuxCameraCaptureService } from './ngxux-camera-capture.service';

describe('NgxuxCameraCaptureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxCameraCaptureService = TestBed.get(NgxuxCameraCaptureService);
    expect(service).toBeTruthy();
  });
});
