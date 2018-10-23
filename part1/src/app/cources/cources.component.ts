import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-cources',
  template: `<h3>courses</h3>
  <ul>
    <li *ngFor="let item of courses$">
       {{ item.value}}
    </li>
  </ul>
  `,
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  isActive = true;
  courses$: AngularFireList<any[]>;


  constructor(private db: AngularFireDatabase) {
  }


  onSave($event) {

    console.log($event);
    console.log('x座標:' + $event.clientX);
  }
  onKeyUp() {
    console.log('enter was pressed.');
  }
  ngOnInit() {
    this.courses$ = this.db.list('/courses')

    console.log(this.courses$)
  }

}
