import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionWorkerComponent } from './production-worker.component';

describe('ProductionWorkerComponent', () => {
  let component: ProductionWorkerComponent;
  let fixture: ComponentFixture<ProductionWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
