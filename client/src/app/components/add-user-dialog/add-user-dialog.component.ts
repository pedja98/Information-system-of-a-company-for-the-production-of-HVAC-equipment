import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {

  form: FormGroup;
  resMsg: string = "";

  types: any[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'sef-prodaje', viewValue: 'Sef prodaje'},
    {value: 'sef-nabavke', viewValue: 'Sef nabavke'},
    {value: 'magacioner', viewValue: 'Magacinski radnik'},
    {value: 'radnik', viewValue: 'Proizvodni radnik'},
  ];

  constructor( private formBuilder: FormBuilder,
    private _user: UserService,
    private dialogRef: MatDialogRef<AddUserDialogComponent>
  ) {
    this.form = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'type': ['', Validators.required],
      'dateOfBirth': ['', Validators.required]
    })
  }

  onChange() : void {
    if(this.resMsg != '') {
      this.resMsg = ''
    }
  }

  addUser() {
    this.resMsg = "";
    if(this.form.valid) {
      this._user.addUser(this.form.value).subscribe((res) => {
        if(!res.created) {
          this.resMsg = 'mail'
          return;
        }
        this.dialogRef.close({ data: 'created' })
      })
    }
  }

  ngOnInit(): void {
  }

}