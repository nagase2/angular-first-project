import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchTerm: string;
  results;

  constructor(public http: Http) {

  }
  newSearch(term) {
    // this.results = this.http.get(`curl https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`)
    // .map()
    //curl https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc


  }
}
