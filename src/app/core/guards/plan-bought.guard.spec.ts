import { TestBed } from '@angular/core/testing';

import { PlanBoughtGuard } from './plan-bought.guard';

describe('PlanBoughtGuard', () => {
  let guard: PlanBoughtGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlanBoughtGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
