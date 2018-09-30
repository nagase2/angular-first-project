import { Component } from '@angular/core';
import { ChangedArgsValues } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  post = {
    title: 'my title',
    isFavorite: false,
    likeCount: 5,
    isLiked: false
  };

  onFavoriteChanged(newValues: ChangedArgsValues) {
    console.log(newValues);
  }
}
