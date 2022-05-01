import { TestBed } from '@angular/core/testing';

import { SymphonyService } from './symphony.service';

describe('SymphonyService', () => {
  let service: SymphonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymphonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
