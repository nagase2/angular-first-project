import { MyFollowerService } from '../../common/my-follower.service';


import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  constructor(private service: MyFollowerService,
              private route: ActivatedRoute
            ) { }
  followers: any[];

  ngOnInit() {
    //何度も同ページを移動する場合はobservableを利用する。
    this.route.queryParamMap.subscribe(param =>{
      console.log(param);
    });
    //他で値を利用しない場合はこちら
    console.log("this is id "+this.route.snapshot.queryParamMap.get('page'));

    this.service.getFollowers().subscribe(response => {
      this.followers = response.json();
      //console.log(this.followers);
    });
  }




}
