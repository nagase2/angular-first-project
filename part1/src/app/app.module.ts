import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourcesComponent } from './cources/cources.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourcesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AuthorsComponent, CourcesComponent]
})
export class AppModule { }
