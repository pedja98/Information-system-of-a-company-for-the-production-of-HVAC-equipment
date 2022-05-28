import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  errMsg: string = ""
  resMsg: string = ""

  form: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    new_password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]),
    confirm: new FormControl('', Validators.required),
  })

  constructor(private _user: UserService, private _dialog: MatDialog) { }

  onChange(): void {
    if (this.resMsg != '') {
      this.resMsg = ''
    }
  }

  update() {
    if (this.form.value.confirm != this.form.value.new_password) {
      this.resMsg = 'confirm';
      return
    }
    if (this.form.valid) {
      this._user.changePassword(this.form.value).subscribe(res => {
        this.resMsg = res.msg
        this.errMsg = res.err
        if (res.success) {
          this.form.reset();
          const dialogConfig = new MatDialogConfig()
          dialogConfig.width = '320px'
          dialogConfig.height = '150px'
          this._dialog.open(DialogMsgComponent, dialogConfig)
        }
      })
    }

  }

  ngOnInit(): void {
  }

}
