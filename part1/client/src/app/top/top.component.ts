import { JwtAuthService } from './../jwt/service/jwt-auth.service';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

  mode = {
    value: 'side'
    //or over
  };
  panelOpenState = true;
  options: FormGroup;

  constructor(
    fb: FormBuilder
    , private breakpointObserver: BreakpointObserver,
    private _authService: JwtAuthService
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
      over: false
    });
  }



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



}
