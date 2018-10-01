import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourcesComponent } from './cources/cources.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './comp/like/like.component';
import { SwitchComponent } from './comp/switch/switch.component';
import { ForComponent } from './for/for.component';
import { SignupFormComponent } from './comp/signup-form/signup-form.component';

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
    SignupFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
