import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PostService } from './common/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourcesComponent } from './cources/cources.component';
import { FavoriteComponent } from './comp/favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './comp/like/like.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { SignupFormComponent } from './comp/signup-form/signup-form.component';
import { NewCourseFormComponent } from './comp/new-course-form/new-course-form.component';
import { PostComponent } from './comp/post/post.component';
import { MyFollowersComponent } from './comp/my-followers/my-followers.component';
import { MyFollowerService } from './common/my-follower.service';
import { SwitchParentsComponent } from './switch-parents/switch-parents.component';
import { MyProfileComponent } from './comp/my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourcesComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    SwitchComponent,
    ForComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    MyFollowersComponent,
    NotFoundComponent,
    SwitchParentsComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', component: LikeComponent },
      { path: 'switch', component: SwitchParentsComponent },
      { path: 'followers/:username', component: MyProfileComponent },
      { path: 'followers', component: MyFollowersComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [PostService, MyFollowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
