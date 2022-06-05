import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionManagerComponent } from './production-manager.component';

describe('ProductionManagerComponent', () => {
  let component: ProductionManagerComponent;
  let fixture: ComponentFixture<ProductionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
