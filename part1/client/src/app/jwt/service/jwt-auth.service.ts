import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  //これは本物だが、環境によってつながらないときがあるので、ダミーに切り替えられるようにしておきたい。
  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  //constructor() { }


  registerUser(user) {
    console.log(user)
    return this.http.post<any>(this._registerUrl, user)
    //return null;
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    console.log('ログインチェックを行います')
    return !!localStorage.getItem('token')
  }

  logOut() {
    localStorage.removeItem('token')
    this._router.navigate(['jwt/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}

