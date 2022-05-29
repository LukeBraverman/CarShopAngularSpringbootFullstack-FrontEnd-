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
import {CarDisplayBlockComponent, } from './shop-landingpage/car-display-block/car-display-block.component';
import { HeaderComponent } from './shop-landingpage/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopLandingpageComponent,
    CarDisplayBlockComponent,
    HeaderComponent,
    ErrorMessageComponent,

  ],
  imports: [CommonModule,
    BrowserAnimationsModule,
    HttpClientModule, MatCardModule, NgbModule, MatTabsModule, MatToolbarModule, MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
