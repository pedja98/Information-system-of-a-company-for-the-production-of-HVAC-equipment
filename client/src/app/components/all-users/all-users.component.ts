import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  addUser() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '500px'
    dialogConfig.height = '500px'
    dialogConfig.disableClose = true
    let dialogRef = this._dialog.open(AddUserDialogComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(res => {
      if (res.data == 'created') { 
        const dialogConfigMsg = new MatDialogConfig()
        dialogConfigMsg.width = '320px'
        dialogConfigMsg.height = '150px'
        dialogConfigMsg.data = {
          msg: 'Dodat je novi korisnik'
        }
        let dialogRefMsg = this._dialog.open(DialogMsgComponent, dialogConfigMsg)
        /* TODO */
      }
    })
  }

  ngOnInit(): void {
  }

}
