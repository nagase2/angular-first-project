import { JwtAuthService } from './jwt-auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public _auth: JwtAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    console.log('intercept method called.')
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth.getToken()}`,
        NNNNNNNN: `this is test value`,
        xxx: 'value12345'
      }
    })
    return next.handle(tokenizeReq)
  }
}

