import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-menus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  styles: ['font-color: green']
})
export class MenuComponent implements OnInit {

  constructor() { }
  private _menuMessage = "ようこそメニューへ";
  private heroes = HEROES;

  grandMenu = {
    firstMenu: 'menu1',
    secondMenu: 'menu2'
  };


  public getMenu(endWith: String,count:number) {
    return this._menuMessage + endWith + count;
  }
  public get menuMessage() {
    return this._menuMessage;
  }
  public set menuMessage(value) {
    this._menuMessage = value;
  }
  ngOnInit() {
    console.log('menu component');
  }

}
