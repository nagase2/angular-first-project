import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
          //もし、リダイレクト先のURLがあれば、そこに飛ばす。
          console.log(returnUrl + 'に移動します。')
          this.router.navigate([returnUrl || '/'])

        } else {
          console.log('login failed.' + credentials.toString())
          this.invalidLogin = true;
        }

      });
  }
}
