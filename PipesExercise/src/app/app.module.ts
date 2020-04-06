import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    ReversePipe,
   
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
