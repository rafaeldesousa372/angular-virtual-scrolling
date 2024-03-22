import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importação do modulo de denpendencia
import { HttpClientModule } from '@angular/common/http';

//import dos modulos Material Virtual Scrolling
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatCardModule,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
