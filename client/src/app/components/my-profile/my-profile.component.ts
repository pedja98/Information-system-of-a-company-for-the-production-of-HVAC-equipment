import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';
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
    dialogConfig.width = '400px'
    dialogConfig.height = '300px'
    dialogConfig.disableClose = true
    dialogConfig.data = {
      user: this.user
    }
    let dialogRef = this._dialog.open(EditMyProfileDialogComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(res => {
      if (res.data == 'updated') {
        const dialogConfigMsg = new MatDialogConfig()
        dialogConfigMsg.width = '320px'
        dialogConfigMsg.height = '150px'
        dialogConfigMsg.data = {
          msg: 'Vaše informacije su izmenjene'
        }

        let dialogRefMsg = this._dialog.open(DialogMsgComponent, dialogConfigMsg)

        dialogRefMsg.afterClosed().subscribe(res => {
          this._user.getUser().subscribe(res => {
            this.errMsg = res.err
            this.user = res
          })
        })
      }
    })
  }

  setImg(event: any): void {
    if (event.target.files.length > 0) {
      const file = new FormData();
      file.append('file', event.target.files[0])
      this._user.changePicture(file).subscribe(res => {
        if (res.success) {
          const dialogConfigMsg = new MatDialogConfig()
          dialogConfigMsg.width = '320px'
          dialogConfigMsg.height = '150px'
          dialogConfigMsg.data = {
            msg: 'Vaša slika je izmenjena'
          }

          let dialogRefMsg = this._dialog.open(DialogMsgComponent, dialogConfigMsg)

          dialogRefMsg.afterClosed().subscribe(res => {
            this._user.getUser().subscribe(res => {
              this.errMsg = res.err
              this.user = res
            })
          })
        }
      })
    }
  }
}
