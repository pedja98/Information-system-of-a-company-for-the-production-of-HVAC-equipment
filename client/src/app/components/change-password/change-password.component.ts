import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

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
  })

  constructor(private _user: UserService) { }

  onChange(): void {
    if (this.resMsg != '') {
      this.resMsg = ''
    }
  }

  update() {
    if (this.form.valid) { 
      this._user.changePassword(this.form.value).subscribe(res => {
        
      })
    }
  }

  ngOnInit(): void {
  }

}
