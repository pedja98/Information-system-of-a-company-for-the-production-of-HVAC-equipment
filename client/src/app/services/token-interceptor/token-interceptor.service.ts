import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let auth = this._injector.get(UserService);
    if (auth.signedIn()) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${auth.getToken()}` }
      });
    }
    return next.handle(req);
  }
}
