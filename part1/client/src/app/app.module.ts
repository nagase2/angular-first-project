import { AuthGuard } from './jwt/auth.guard';
import { JwtAuthService } from './jwt/service/jwt-auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PostService } from './common/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {
  MaterialModules
} from './material-modules';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourcesComponent } from './comp/cources/cources.component';
import { FavoriteComponent } from './comp/favorite/favorite.component';
import { TitleCaseComponent } from './comp/title-case/title-case.component';
import { TitleCasePipe } from './comp/title-case/title-case.pipe';
import { PanelComponent } from './comp/panel/panel.component';
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
import { MdFormsComponent } from './comp/md-forms/md-forms.component';
import { TopComponent } from './top/top.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DialogComponent } from './comp/dialog/dialog.component';
import { MatDialogRef, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthComponent } from './auth/auth.component';
import { ResponsiveComponent } from './experiment/responsive/responsive.component';
import { NavComponent } from './experiment/nav/nav.component';
import { BootstrapComponent } from './experiment/bootstrap/bootstrap.component';
import { MainNavComponent } from './flat-menu-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegisterComponent } from './jwt/user-register/user-register.component';
import { JwtLoginComponent } from './jwt/jwt-login/jwt-login.component';
import { EventComponent } from './jwt/event/event.component';
import { SpecialEventsComponent } from './jwt/special-events/special-events.component';
import { TokenInterceptorService } from './jwt/service/token-interceptor.service';

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
    DialogComponent,
    AuthComponent,
    ResponsiveComponent,
    NavComponent,
    BootstrapComponent,
    MainNavComponent,
    WelcomeComponent,
    UserRegisterComponent,
    JwtLoginComponent,
    EventComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpModule, HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MaterialModules,
    RouterModule.forRoot([
      { path: 'xxx', redirectTo: '/auth', pathMatch: 'full' },
      { path: '', component: WelcomeComponent },
      { path: 'jwt/login', component: JwtLoginComponent },
      { path: 'jwt/register', component: UserRegisterComponent },
      { path: 'jwt/events', component: EventComponent },
      {
        path: 'jwt/special', component: SpecialEventsComponent
        //,canActivate: [AuthGuard]
      },
      { path: 'auth', component: AuthComponent },
      { path: 'md-forms', component: MdFormsComponent },
      { path: 'bootstrap', component: BootstrapComponent },
      { path: 'switch', component: SwitchParentsComponent },
      { path: 'followers/:id/:username', component: MyProfileComponent },
      { path: 'followers', component: MyFollowersComponent },
      { path: 'courses', component: CourcesComponent },
      { path: 'responsive', component: ResponsiveComponent },
      { path: '**', component: NotFoundComponent }
    ]),

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AuthGuard, PostService, MyFollowerService, JwtAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AngularFireAuth,
    AngularFirestore,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ja-JP'
    }],
  entryComponents: [
    // If you want to use component in the dialog, need to be written the name of the dialog here.
    FavoriteComponent,
    DialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

