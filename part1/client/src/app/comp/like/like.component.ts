import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likeCount: number;
  @Input() youLiked: boolean;

  constructor() { }
  ngOnInit() {
  }

  likeButtonClicked() {
    this.likeCount += (this.youLiked) ? -1 : +1;
    this.youLiked = !this.youLiked;

  }

}
