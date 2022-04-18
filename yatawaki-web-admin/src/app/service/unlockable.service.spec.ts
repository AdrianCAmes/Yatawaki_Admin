import { TestBed } from '@angular/core/testing';

import { UnlockableService } from './unlockable.service';

describe('UnlockableService', () => {
  let service: UnlockableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnlockableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
