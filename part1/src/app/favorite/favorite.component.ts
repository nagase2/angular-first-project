import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() isFavorite: boolean;
  @Output() change2 = new EventEmitter();
  constructor() {
    // this.isFavorite = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change2.emit(this.isFavorite);
    //console.log('クリックされたよ' + this.isFavorite);
  }

}
