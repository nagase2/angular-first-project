import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  viewMode: string;
  constructor() {
  }

  ngOnInit() {
    //ここで初期ページを切り替え
    this.viewMode = 'five';
  }
  changeMode(mode: string) {
    console.log(mode + "が選択されました");
    this.viewMode = mode;
  }

}
