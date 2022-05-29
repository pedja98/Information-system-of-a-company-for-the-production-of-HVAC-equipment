import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyProfileDialogComponent } from './edit-my-profile-dialog.component';

describe('EditMyProfileDialogComponent', () => {
  let component: EditMyProfileDialogComponent;
  let fixture: ComponentFixture<EditMyProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyProfileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
