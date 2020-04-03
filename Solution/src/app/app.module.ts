import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DirectiveSolComponent } from './directive-sol/directive-sol.component';
import { EventSolComponent } from './event-sol/event-sol.component';
import { TextChangeDirective } from './directive-sol/custom.directive';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    DirectiveSolComponent,
    EventSolComponent,
    TextChangeDirective,
    StudyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
