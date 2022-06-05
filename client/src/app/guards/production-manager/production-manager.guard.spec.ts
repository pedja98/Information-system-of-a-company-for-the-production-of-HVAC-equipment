import { TestBed } from '@angular/core/testing';

import { ProductionManagerGuard } from './production-manager.guard';

describe('ProductionManagerGuard', () => {
  let guard: ProductionManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductionManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
