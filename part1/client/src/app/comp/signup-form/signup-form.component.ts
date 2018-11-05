
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  myform: FormGroup;

  ngOnInit(): void {
    //throw new Error("Method not implemented.");

  this.myform = new FormGroup({
    username: new FormControl('',
      [
        Validators.minLength(3),
        Validators.maxLength(10),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.cannotContainAAA,
        //これを有効にするとうまく動かないので、一旦コメントアウトする。
       // UsernameValidators.shouldBeUnique,
        Validators.required
      ]),

    password: new FormControl('',
      [Validators.required])
  });
  }


  /**
   * get username from myform property
   */
  get username() {
    return this.myform.get('username');
  }

  get password() {
    return this.myform.get('password');
  }


  login() {
    this.myform.setErrors({
      invalidLogin: true
    });
  }
}
