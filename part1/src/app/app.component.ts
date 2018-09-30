import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  post = {
    title: 'my title',
    isFavorite: false
  };

  onFavoriteChanged(newValue) {
    console.log('favorite changed ' + newValue);
  }
}
