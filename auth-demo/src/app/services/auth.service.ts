import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  aaa;

  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map(response => {
        console.log(response.json());
        let result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('xxx', 'ローカルストレージに値を保管');
          this.aaa = localStorage.getItem('token')
          this.isLoggedIn()

          return true;
        }
        return false;
      });
  }

  logout() {
    console.log('log out method was called.')
    localStorage.removeItem('token')


  }

  isLoggedIn() {

    return tokenNotExpired()
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token')

    // if (!token) {
    //   return false;
    // }

    // let expirationDate = jwtHelper.getTokenExpirationDate(token)
    // let isExpired = jwtHelper.isTokenExpired(token)
    // console.log(expirationDate)
    // console.log(isExpired)

    // return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token')
    if (!token) {
      return null
    }

    let jwtHelper = new JwtHelper();
    return jwtHelper.decodeToken(token)
  }
}

