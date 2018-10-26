import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { EventService } from '../services/event.service';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import * as $ from 'jquery';// import Jquery here
enableProdMode();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyAblTpwL6POGJg4ciXl4erSXO0HRcAO03o',
      apiKey: 'AIzaSyDwasV4X7gKM82ZQ6H43RRAi9VUmuNKV80',
      //apiKey: 'AIzaSyBKBkB0mc2atwxjB7R8dodJI7c9zXYm7sM',
      libraries: ["places"]
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
