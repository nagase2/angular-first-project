import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-cources',
  template: `<h3>courses</h3>
  <ul>
  <li *ngFor="let item of items | async">
      
      {{item.value}}
  </li>
</ul>
  `,
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  isActive = true;
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.items = db.collection('/items').valueChanges();
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
