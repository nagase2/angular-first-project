
import { environment } from './../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PostService } from './common/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {
//   MatCheckboxModule, MatRadioModule, MatSelectModule,
//   MatSidenavModule, MatIconModule, MatToolbarModule,
//   MatOptionModule,
//   MatInputModule
// } from '@angular/material';
import {
  MaterialModules
} from './material-modules';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourcesComponent } from './cources/cources.component';
import { FavoriteComponent } from './comp/favorite/favorite.component';
import { TitleCaseComponent } from './comp/title-case/title-case.component';
import { TitleCasePipe } from './comp/title-case/title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './comp/like/like.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './comp/for/for.component';
import { SignupFormComponent } from './comp/signup-form/signup-form.component';
import { NewCourseFormComponent } from './comp/new-course-form/new-course-form.component';
import { PostComponent } from './comp/post/post.component';
import { MyFollowersComponent } from './comp/my-followers/my-followers.component';
import { MyFollowerService } from './common/my-follower.service';
import { SwitchParentsComponent } from './switch-parents/switch-parents.component';
import { MyProfileComponent } from './comp/my-profile/my-profile.component';
import { MdFormsComponent } from './md-forms/md-forms.component';
import { TopComponent } from './top/top.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DialogComponent } from './comp/dialog/dialog.component';
import { MatDialogRef } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourcesComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent, SwitchComponent,
    ForComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    MyFollowersComponent,
    NotFoundComponent,
    SwitchParentsComponent,
    MyProfileComponent,
    MdFormsComponent,
    TopComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MaterialModules,
    RouterModule.forRoot([
      { path: '', component: TopComponent },
      { path: 'md-forms', component: MdFormsComponent },
      { path: 'switch', component: SwitchParentsComponent },
      { path: 'followers/:id/:username', component: MyProfileComponent },
      { path: 'followers', component: MyFollowersComponent },
      { path: 'courses', component: CourcesComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [PostService, MyFollowerService, { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }],
  entryComponents: [
    // If you want to use component in the dialog, need to be written the name of the dialog here.
    FavoriteComponent,
    DialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

