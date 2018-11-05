import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MyFollowerService {

  url = 'https://api.github.com/users/mosh-hamedani/followers';
  //posts: any[];

  constructor(private http: Http) { }

  getFollowers() {
    return this.http.get(this.url);
  }

  deleteFollowers(follower) {
    return this.http.delete(this.url + '/' + follower.id);
  }

  updateFollowers(follower) {
    return this.http.patch(this.url + '/' + follower.id, JSON.stringify({ isRead: true }));
  }
}
