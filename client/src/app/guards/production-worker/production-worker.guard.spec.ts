import { TestBed } from '@angular/core/testing';

import { ProductionWorkerGuard } from './production-worker.guard';

describe('ProductionWorkerGuard', () => {
  let guard: ProductionWorkerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductionWorkerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
