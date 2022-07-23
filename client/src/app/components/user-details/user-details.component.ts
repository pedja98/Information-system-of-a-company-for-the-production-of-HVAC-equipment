import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchUserDetailsDto } from 'src/app/dto/fetchUserDetails';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  errMsg: string = ""
  user = {} as FetchUserDetailsDto

  constructor(private _route: ActivatedRoute, private _user: UserService,) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id') || '';
    this._user.getUserById(id).subscribe(res => {
      this.errMsg = res.err
      this.user = res
    })
  }

}
