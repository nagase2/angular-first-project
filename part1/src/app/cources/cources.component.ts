import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseAuth, FirebaseApp } from 'angularfire2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cources',
  templateUrl: 'cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  isActive = true;
  public items: Observable<any[]>;


  constructor(private fireStore: AngularFirestore, fireAuth: FirebaseApp) {
    this.items = fireStore.collection('/items').valueChanges();

    // this.items = fireStore.collection('items', (ref) => {
    //   ref.where('name', '==', 'nagase')
    // })

    //afs.collection('items', ref => ref.where('size', '==', 'large'))

  }

  addItemValue(itemValue) {
    console.log(itemValue.value)
    this.fireStore.collection('items').add({ 'value': itemValue.value }).then((docRef) => {
      console.log("" + docRef);

    }).catch((error) => {
      console.log(error);
    })
  }

  findOneItem() {

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
