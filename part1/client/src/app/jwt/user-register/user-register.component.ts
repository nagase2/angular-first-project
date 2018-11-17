import { JwtAuthService } from './../service/jwt-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  email: string;
  password: string
  registerUserData = {};

  constructor(private _auth: JwtAuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res)
        localStorage.setItem('token', res.token)
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
