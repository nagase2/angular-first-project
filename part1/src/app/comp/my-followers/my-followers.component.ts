import { MyFollowerService } from '../../common/my-follower.service';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  constructor(private service: MyFollowerService) { }
  followers: any[];

  ngOnInit() {
    this.service.getFollowers().subscribe(response => {
      this.followers = response.json();
      console.log(this.followers);
    });
  }




}
