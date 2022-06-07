import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonRestComponent } from './counter/button-rest/button-rest.component';
@NgModule({
  declarations: [
    AppComponent,CounterComponent, ButtonAddComponent, ButtonRestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
