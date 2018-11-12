import { JwtAuthService } from './../service/jwt-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  registerUserData = {}
  
  constructor(private _auth: JwtAuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res)
      }, (req) => {
        console.log(req)
      }
    )
  }

}
