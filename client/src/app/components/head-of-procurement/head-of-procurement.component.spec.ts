import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfProcurementComponent } from './head-of-procurement.component';

describe('HeadOfProcurementComponent', () => {
  let component: HeadOfProcurementComponent;
  let fixture: ComponentFixture<HeadOfProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfProcurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
