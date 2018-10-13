import { Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, state } from '@angular/core';
import { CanActivate } from '@angular/router';

/**
 * このサービスを使って、権限のない画面に直接アクセス
 * しようとした場合の挙動を定義する
 */
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * ここでユーザがログインできるかどうかの条件を指定する。
   * truenならOK、falseならNG…
   * このクラスをapp.module.tsで指定することで、このチェックを有効化することができる。
   */
  canActivate(route, state: RouterStateSnapshot) {
    console.log('can activate method called.')
    if (this.authService.isLoggedIn()) {
      return true;
    }

    //失敗したらこのURLに飛ばす
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false;
  }
}
