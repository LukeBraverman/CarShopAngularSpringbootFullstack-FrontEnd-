import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarListStoreComponent } from './car-list-store/car-list-store.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListStoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
