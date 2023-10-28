import { TestBed } from '@angular/core/testing';

import { PageProtectedGuard } from './page-protected.guard';

describe('PageProtectedGuard', () => {
  let guard: PageProtectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageProtectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
