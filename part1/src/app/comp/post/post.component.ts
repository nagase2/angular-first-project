import { PostService } from './../../common/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements onInit {

  posts: any[];
  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response.json();
        //console.log(response.json());
      }, error => {
        alert('an unexpected error happend');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.postService.getPosts().subscribe(x => {
      // リクエストの戻り値をpostに設定
      post['id'] = x.json().id;
      // postsの最初に登録した値を追加する。
      this.posts.splice(0, 0, post);
      // console.log(x.json());
    }, (error: Response) => {
      if (error.status === 400) {
        // this.form.setErrors(error.json));

      } else {
        alert('an unexpected error occurred.');
        console.log(error);
      }

    });
  }


  updatePost(post) {
    this.postService.updatePost(post)
      // this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(x => {
        console.log(x.json());
      });
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {
      if (error.status === 404) {
        alert('this post has already been deteled.');
      } else {
        alert('An unexpected error occurred.');
      }
      console.log(error)
    });
  }



}
