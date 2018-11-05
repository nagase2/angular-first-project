import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';


import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})
export class AuthComponent {
  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    //this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  createUser(email: FormControl, password: FormControl) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email.value, password.value)
      .catch(error => {
        console.log('エラーです。', error.code);
        console.log('めっせ', error.message);
      })
  }
  async loginWithEmail(email: FormControl, password: FormControl) {
    console.log(email.value);

    let user = await this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value)
      .catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.log(error.message);
      // ...
    });

    console.log(user)


  }
}

