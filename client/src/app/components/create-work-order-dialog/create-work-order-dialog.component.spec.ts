import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkOrderDialogComponent } from './create-work-order-dialog.component';

describe('CreateWorkOrderDialogComponent', () => {
  let component: CreateWorkOrderDialogComponent;
  let fixture: ComponentFixture<CreateWorkOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
