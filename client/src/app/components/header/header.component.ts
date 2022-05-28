import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _user: UserService, private _router: Router) { }

  logOut(): void {
    this._user.logout().subscribe((res) => {
      if (res.err) {
        alert(res.err)
        return
      }
      else if (res.success) {
        localStorage.clear()
        this._router.navigate([""])
      }
    })
  }

  ngOnInit(): void {
  }

}
