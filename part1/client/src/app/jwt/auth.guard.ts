import { JwtAuthService } from './service/jwt-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: JwtAuthService,
    private _router: Router) {
  }

  canActivate(): boolean {
    console.log('can activate called.')
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['jwt/login'])
      return false
    }
  }
}
