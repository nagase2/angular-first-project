import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  //これは本物だが、環境によってつながらないときがあるので、ダミーに切り替えられるようにしておきたい。
  private _registerUrl = "http://localhost:3000/api/register"


  constructor(private http: HttpClient) { }

  //constructor() { }


  registerUser(user) {
    console.log(user)
    return this.http.post<any>(this._registerUrl, user)
    //return null;
  }
}

