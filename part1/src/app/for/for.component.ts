import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  items = [
    { id: 1, name: 'one' }, { id: 2, name: 'two' },
    { id: 3, name: 'three' }, { id: 4, name: 'four' }];

  constructor() { }

  ngOnInit() {
  }

}
