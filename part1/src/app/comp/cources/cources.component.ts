import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FirebaseAuth, FirebaseApp } from 'angularfire2';
import { FormControl } from '@angular/forms';
import { Item } from './Item';


@Component({
  selector: 'app-cources',
  templateUrl: 'cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  isActive = true;
  //public items: Observable<any[]>;

  itemCollection: AngularFirestoreCollection<Item>;

  // public items: Observable<Item[]>
  public items: Observable<any[]>;
  startDate$: BehaviorSubject<Date>
  searchName$: BehaviorSubject<String>

  constructor(private afs: AngularFirestore, fireAuth: FirebaseApp) {
    this.itemCollection = this.afs.collection('items');

    this.items = afs.collection('items', ref => ref.where('value', '==', 'aaa')).valueChanges();


    // this.startDate$ = new BehaviorSubject(new Date('2018-10-27'))
    // this.searchName$ = new BehaviorSubject("aaa")

    // this.items$ = this.searchName$.pipe(
    //   switchMap(date => this.fireStore
    //     .collection<Item>(`Item`, ref => {
    //       ref.where('startDate', '==', date))
    //     .valueChanges()
    //   )
    // )


    //var itemRef = fireStore.collection('Items')

    // var query = itemRef.

    // fireStore.collection('items', (ref) => {
    //   ref.where('name', '==', 'nagase')
    // })
    //     var citiesRef = db.collection('cities');
    // var query = citiesRef.where('capital', '==', true).get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       console.log(doc.id, '=>', doc.data());
    //     });
    //   })
    //   .catch(err => {
    //     console.log('Error getting documents', err);
    //   });

    //afs.collection('items', ref => ref.where('size', '==', 'large'))

  }

  getByItemName(itemName) {
    this.itemCollection = this.afs.collection('items', ref => ref.where('value', '==', itemName));
    console.log("★")
    console.log(this.itemCollection)
  }

  addItemValue(itemValue) {
    console.log(itemValue.value)
    this.afs.collection('items').add({ 'value': itemValue.value }).then((docRef) => {
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



export interface Item {
  id: string
  name: string
  value: string
  age: number
}

// here is sample code
//https://medium.com/avocoders/getting-started-with-angularfirestore-1a2cef8aa394
