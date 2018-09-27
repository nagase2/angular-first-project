import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  template: `<hr>
    <button class="btn btn-primary" [class.active]="isActive">save</button>
    <br>
    <button
    (click)="onSave($event)"
    class="btn btn-primary"  [class.active]="isActive"
     [style.backgroundColor]="isActive?'blue':'white'">ボタン</button>
     <br>
     <input (keyup.enter)="onKeyUp()"/>
     `,
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  isActive = true;
  constructor() { }
  onSave($event) {

    console.log($event);
    console.log('x座標:' + $event.clientX);
  }
  onKeyUp() {
    console.log("enter was pressed.");
  }
  ngOnInit() {
  }

}
