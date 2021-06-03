import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
