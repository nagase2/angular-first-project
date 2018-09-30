import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  template: `<h3>cources</h3>
    <button class="btn btn-primary" [class.active]="isActive">なんにもボタン</button>
    <button
    (click)="onSave($event)"
    class="btn btn-primary"  [class.active]="isActive"
     [style.backgroundColor]="isActive?'green':'white'">イベントボタン</button>
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
