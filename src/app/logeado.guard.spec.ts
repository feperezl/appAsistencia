import { TestBed } from '@angular/core/testing';

import { LogeadoGuard } from './logeado.guard';

describe('LogeadoGuard', () => {
  let guard: LogeadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogeadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
