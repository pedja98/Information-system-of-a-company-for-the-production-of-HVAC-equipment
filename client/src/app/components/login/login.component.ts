import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  errMsg: string = "";
  resMsg: string = "";

  constructor(private _user: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.email == "" || this.email == null || this.email == undefined) {
      this.resMsg = "email empty"
      return
    }

    if(this.password == "" || this.password == null || this.password == undefined) {
      this.resMsg = "password empty"
      return
    }

    const user = {
      email: this.email,
      password: this.password
    }
    this._user.login(user).subscribe((res) => {
      this.errMsg = res.err
      this.resMsg = res.msg
      alert(this.resMsg)
    })
  }
}
