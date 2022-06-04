import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  form: FormGroup;
  resMsg = ""

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private FormBuilder: FormBuilder,
    private _user: UserService,
    private dialogRef: MatDialogRef<EditUserDialogComponent>
  ) {
    let dateStr = new Date(this.data.user.dateOfBirth).toISOString()
    dateStr = dateStr.substring(0, dateStr.indexOf('T'));
    this.form = this.FormBuilder.group({
      'firstName': [data.user.firstName, Validators.required],
      'lastName': [data.user.lastName, Validators.required],
      'email': [data.user.email, [Validators.required, Validators.email]],
      'dateOfBirth': [dateStr, Validators.required],
    })

  }

  onChange(): void {
    if (this.resMsg != '') {
      this.resMsg = ''
    }
  }

  change() {
    this.resMsg = ""
    if(this.form.valid) {
      this._user.editUser(this.form.value, this.data.user.id).subscribe(res => {
        this.resMsg = res.faild
        if(res.success) {
          this.dialogRef.close({ data: 'updated' })
        }
      })
    }
  }

  ngOnInit(): void {
  }


}
