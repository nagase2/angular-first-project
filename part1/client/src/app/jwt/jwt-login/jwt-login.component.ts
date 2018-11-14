import { JwtAuthService } from './../service/jwt-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css']
})
export class JwtLoginComponent implements OnInit {
  loginUserData: any = {}
  constructor(private _auth: JwtAuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
