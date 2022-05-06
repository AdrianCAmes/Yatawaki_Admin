import { TestBed } from '@angular/core/testing';

import { SymphonyGestureService } from './symphony-gesture.service';

describe('SymphonyGestureService', () => {
  let service: SymphonyGestureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymphonyGestureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
