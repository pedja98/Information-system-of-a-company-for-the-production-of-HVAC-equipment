import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-my-profile-dialog',
  templateUrl: './edit-my-profile-dialog.component.html',
  styleUrls: ['./edit-my-profile-dialog.component.css']
})
export class EditMyProfileDialogComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private _user: UserService,
    private dialogRef: MatDialogRef<EditMyProfileDialogComponent>
  ) {
    let dateStr = new Date(this.data.user.dateOfBirth).toISOString()
    dateStr = dateStr.substring(0, dateStr.indexOf('T'));
    this.form = this.formBuilder.group({
      'firstName': [data.user.firstName, Validators.required],
      'lastName': [data.user.lastName, Validators.required],
      'dateOfBirth': [dateStr, Validators.required]
    })
  }

  change() {
    if (this.form.valid) {
      this._user.updateMyProfile(this.form.value).subscribe(res => {
        if (res.success) {
          this.dialogRef.close({ data: 'updated' })
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
