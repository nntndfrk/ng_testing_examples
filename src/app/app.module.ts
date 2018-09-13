import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextReducerPipe } from './shared/pipes/text-reducer.pipe';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    TextReducerPipe,
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
