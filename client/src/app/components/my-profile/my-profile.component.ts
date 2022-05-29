import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { EditMyProfileDialogComponent } from '../edit-my-profile-dialog/edit-my-profile-dialog.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  errMsg: string = ""
  user: any = null

  constructor(private _user: UserService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._user.getUser().subscribe(res => {
      this.errMsg = res.err
      this.user = res
    })
  }

  openEditDialog(): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '320px'
    dialogConfig.height = '150px'
    this._dialog.open(EditMyProfileDialogComponent, dialogConfig)
  }

}
