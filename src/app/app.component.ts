import {Component, OnInit} from '@angular/core';
import {CarListStoreService} from "./store/carlistStore/car-list-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'CarShop';

  constructor(private carListStoreService:CarListStoreService) {
  }

  ngOnInit() {
  }

}
