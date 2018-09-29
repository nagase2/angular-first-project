import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  constructor() {
    this.isFavorite = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log('クリックされたよ' + this.isFavorite);
  }

}
