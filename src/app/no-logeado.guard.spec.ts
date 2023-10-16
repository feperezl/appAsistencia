import { TestBed } from '@angular/core/testing';

import { NoLogeadoGuard } from './no-logeado.guard';

describe('NoLogeadoGuard', () => {
  let guard: NoLogeadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoLogeadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
