import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {
  title = 'title';
  //transform: string;
  transform = { sss: 'xxx' };
  constructor() { }

  ngOnInit() {
  }

}
