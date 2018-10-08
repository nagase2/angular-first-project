import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-parents',
  templateUrl: './switch-parents.component.html',
  styleUrls: ['./switch-parents.component.css']
})
export class SwitchParentsComponent implements OnInit {
  post = {
    title: 'my title',
    isFavorite: false,
    likeCount: 5,
    isLiked: false
  };
  constructor() { }

  ngOnInit() {
  }

  onFavoriteChanged(newValues: ChangedArgsValues) {
    console.log(newValues);
  }

}
