import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 

import { NagaseComponent } from './nagase.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent
    , NagaseComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NagaseComponent, MenuComponent]
})
export class AppModule { }
