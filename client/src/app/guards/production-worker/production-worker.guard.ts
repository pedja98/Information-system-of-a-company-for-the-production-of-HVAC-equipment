import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductionWorkerGuard implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (user.type == 'production-worker') {
      return true;
    }
    this._router.navigate(["*"])
    return false;
  }

}
