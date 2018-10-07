import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements onInit {
  posts: any[];
 // http: Http;
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    //this.http = http;
  }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        //console.log(response.json());
      });

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post)).subscribe(x => {
      // リクエストの戻り値をpostに設定
      post['id'] = x.json().id;
      // postsの最初に登録した値を追加する。
      this.posts.splice(0, 0, post);
      // console.log(x.json());
    });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(x => {
        console.log(x.json());
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }



}
