import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NagaseComponent } from './nagase.component';

@NgModule({
  declarations: [
    AppComponent
    , NagaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NagaseComponent]
})
export class AppModule { }
