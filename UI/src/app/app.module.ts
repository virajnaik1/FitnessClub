import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";

import { rootRoutes } from "./app.routing";
import { AppComponent } from './app.component';

import { HomeModule } from './Home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    rootRoutes,
    HttpClientModule,
    HomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
