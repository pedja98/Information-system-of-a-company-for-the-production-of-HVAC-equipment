import { TestBed } from '@angular/core/testing';

import { HeadOfProcurementGuard } from './head-of-procurement.guard';

describe('HeadOfProcurementGuard', () => {
  let guard: HeadOfProcurementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeadOfProcurementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
