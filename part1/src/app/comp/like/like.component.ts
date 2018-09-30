import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likeCount: number;
  @Input() youLiked = false;
  constructor() { }

  ngOnInit() {
  }

  likeButtonClicked() {
    if (this.youLiked === false) {
      this.likeCount++;
      this.youLiked = !this.youLiked;
    } else {
      this.likeCount--;
      this.youLiked = !this.youLiked;
    }

  }

}
 