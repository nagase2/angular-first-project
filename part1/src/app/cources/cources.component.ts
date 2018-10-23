import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cources',
  template: `<h3>courses</h3>
  <ul>
  
  </ul>
  `,
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  isActive = true;
  constructor(db: AngularFireDatabase) {
    db.list('/courses').valueChanges();
  }
  onSave($event) {

    console.log($event);
    console.log('x座標:' + $event.clientX);
  }
  onKeyUp() {
    console.log('enter was pressed.');
  }
  ngOnInit() {
  }

}
