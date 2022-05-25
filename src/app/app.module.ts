import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ShopLandingpageComponent } from './shop-landingpage/shop-landingpage.component';
import {CommonModule} from "@angular/common";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ShopLandingpageComponent,
  ],
  imports: [CommonModule,
    BrowserModule,
    HttpClientModule, MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
