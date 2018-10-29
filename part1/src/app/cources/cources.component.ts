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

  itemRef: AngularFirestoreCollection<Item>
  public items$: Observable<Item[]>
  startDate$: BehaviorSubject<Date>
  searchName$: BehaviorSubject<String>

  constructor(private fireStore: AngularFirestore, fireAuth: FirebaseApp) {

    // this.startDate$ = new BehaviorSubject(new Date('2018-10-27'))
    // this.searchName$ = new BehaviorSubject("aaa")

    // this.items$ = this.searchName$.pipe(
    //   switchMap(date => this.fireStore
    //     .collection<Item>(`item/`, ref => {
    //       ref.where('startDate', '==', date))
    //     .valueChanges()
    //   )
    // )


    // var itemRef = fireStore.collection('/items')

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

<<<<<<< HEAD

=======
export interface Item{
  id:string
  name:string
  value:string
  age:number
} 
>>>>>>> 83e7e61a2efb5f6b1c9f38af5bee3225d2fd147d
