import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errMsg: string = '';
  resMsg: string = '';

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private _user: UserService, private _router: Router) {}

  ngOnInit(): void {}

  onChange(): void {
    if (this.resMsg != '') {
      this.resMsg = '';
    }
  }

  login(): void {
    this.errMsg = '';
    this.resMsg = '';

    if (this.form.valid) {
      this._user.login(this.form.value).subscribe((res) => {
        this.errMsg = res.err;
        this.resMsg = res.msg;
        if (res.token) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              token: res.token,
              type: res.type,
            })
          );
          if (res.type === 'admin') {
            this._router.navigate(['/admin']);
          }

          if (res.type === 'production-manager') {
            this._router.navigate(['/production-manager']);
          }

          if (res.type === 'production-worker') {
            this._router.navigate(['/production-worker']);
          }

          if (res.type === 'stockkeeper') {
            this._router.navigate(['/stockkeeper']);
          }

          if (res.type === 'head-of-procurement') {
            this._router.navigate(['/head-of-procurement']);
          }
        }
      });
    }
  }
}
