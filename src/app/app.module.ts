import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ShopLandingpageComponent } from './shop-landingpage/shop-landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopLandingpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
