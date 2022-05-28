import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    confirm: new FormControl('', Validators.required),
  })

  constructor() { }

  onChange(): void {
    if (this.resMsg != '') {
      this.resMsg = ''
    }
  }

  update() {
    alert(this.form.value)
  }

  ngOnInit(): void {
  }

}
