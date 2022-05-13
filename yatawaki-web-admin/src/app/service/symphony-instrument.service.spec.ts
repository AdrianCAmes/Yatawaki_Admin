import { TestBed } from '@angular/core/testing';

import { SymphonyInstrumentService } from './symphony-instrument.service';

describe('SymphonyInstrumentService', () => {
  let service: SymphonyInstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymphonyInstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
