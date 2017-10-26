import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
    //components are like classes with dynamic HTML
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    //importing package modules from libraries and the routing constant
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
