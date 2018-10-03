
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  myform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    password: new FormControl('', Validators.required)
  });
  /**
   * get username from myform property
   */
  get username() {
    return this.myform.get('username');
  }
}
