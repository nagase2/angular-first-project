import { JwtAuthService } from './../service/jwt-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  email: string;
  password: string;
  registerUserData: UserData;

  constructor(private _auth: JwtAuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['jwt/special'])
      },
      (req) => {
        console.log(req)
      }
    )
  }
}

interface UserData {
  email: string,
  password: string
};
