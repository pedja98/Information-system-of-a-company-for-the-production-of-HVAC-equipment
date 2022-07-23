import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FetchUsersDto } from 'src/app/dto/fetchUsersDto';
import { UserService } from 'src/app/services/user/user.service';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _user: UserService,
    private _router: Router
  ) { }

  users: FetchUsersDto[] = [];

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
        this._user.getUsers().subscribe(res => {
          this.users = res;
        })
      }
    })
  }

  resetPassword(i: number) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '400px'
    dialogConfig.height = '150px'
    dialogConfig.data = {
      msg: 'Da li želite da promenite lozinku'
    }
    let dialogRef = this._dialog.open(ConfirmDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(res => {
      if (res.data == 'confirm') {
        this._user.resetPassword({ id: this.users[i].id }).subscribe(res => {
          if (res.success) {
            const dialogConfig = new MatDialogConfig()
            dialogConfig.width = '320px'
            dialogConfig.height = '150px'
            dialogConfig.data = {
              msg: `Korisniku je resetovana lozinka`
            }
            this._dialog.open(DialogMsgComponent, dialogConfig)
          }
        })
      }
    })
  }

  deleteUser(i: number) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '400px'
    dialogConfig.height = '150px'
    dialogConfig.data = {
      msg: 'Da li želite da obrišete korisnka'
    }
    let dialogRef = this._dialog.open(ConfirmDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(res => {
      if (res.data == 'confirm') {
        this._user.deleteUser({ id: this.users[i].id }).subscribe(response => {
          if (response.success) {
            const dialogConfig = new MatDialogConfig()
            dialogConfig.width = '320px'
            dialogConfig.height = '150px'
            dialogConfig.data = {
              msg: `Korisnik ${this.users[i].firstName} ${this.users[i].lastName} je obrisan`
            }
            let dialogRefMsg = this._dialog.open(DialogMsgComponent, dialogConfig)

            dialogRefMsg.afterClosed().subscribe(data => {
              this.users = response.users
            })
          }
        })
      }
    })
  }

  editUser(i: number) {
    this._user.getUserForEdit(this.users[i].id).subscribe(res => {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.width = '450px'
      dialogConfig.height = '480px'
      dialogConfig.data = {
        user: res,
      }
      let dialogRef = this._dialog.open(EditUserDialogComponent, dialogConfig)

      dialogRef.afterClosed().subscribe(res => {
        if (res === null || res === undefined) {
          return
        }
        if (res.msg == 'updated') {
          this._user.getUsers().subscribe(res => {
            this.users = res;
            const dialogConfig = new MatDialogConfig()
            dialogConfig.width = '320px'
            dialogConfig.height = '150px'
            dialogConfig.data = {
              msg: `Korisničke informacije su ažurirane`
            }
            this._dialog.open(DialogMsgComponent, dialogConfig)
          })
        }
      })
    })
  }

  userDetails(i: number) {
    this._router.navigate(["/admin/users/" + this.users[i].id])
  }

  ngOnInit(): void {
    this._user.getUsers().subscribe(res => {
      this.users = res;
    })
  }

}
