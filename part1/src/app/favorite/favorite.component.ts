import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //これは今のところあってもなくても同じ動き
  //,encapsulation : ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isFavorite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change1') change2 = new EventEmitter();
  constructor() {
    // this.isFavorite = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change2.emit({ newValue: this.isFavorite });
    // console.log('クリックされたよ' + this.isFavorite);
  }

}

export interface ChangedArgsValues {
  isFavorite: boolean;
  count: number;
}
