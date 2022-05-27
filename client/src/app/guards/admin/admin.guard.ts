import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if(user.type == 'admin') {
      return true;
    }
    this._router.navigate(["*"])
    return false;
  }
}

