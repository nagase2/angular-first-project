import { RouterModule } from '@angular/router';
import { JwtAuthService } from './../service/jwt-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css']
})
export class JwtLoginComponent implements OnInit {
  loginUserData: any = {}
  constructor(
    private _auth: JwtAuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        (res) => {
          console.log(res)
          localStorage.setItem('token', res.token)
          // 指定した先に移動させる
          this._router.navigate(['jwt/special'])
        },
        (error) => {
          console.log(error)
        }
      )
  }

}
