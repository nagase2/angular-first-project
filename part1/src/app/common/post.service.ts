import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  //posts: any[];

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id);
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }
}
