import { TestBed } from '@angular/core/testing';

import { UserUnlockableService } from './user-unlockable.service';

describe('UserUnlockableService', () => {
  let service: UserUnlockableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUnlockableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
