import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ShopLandingpageComponent } from './shop-landingpage/shop-landingpage.component';
import {CommonModule} from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarDisplayBlockComponent } from './car-display-block/car-display-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopLandingpageComponent,
    CarDisplayBlockComponent,
  ],
    imports: [CommonModule,
      BrowserAnimationsModule,
        HttpClientModule, MatCardModule, NgbModule, MatTabsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
