import { Component, OnInit } from '@angular/core';
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";

@Component({
  selector: 'app-shop-landingpage',
  templateUrl: './shop-landingpage.component.html',
  styleUrls: ['./shop-landingpage.component.css']
})
export class ShopLandingpageComponent implements OnInit {

  constructor(private carListStoreService:CarListStoreService) { }

  ngOnInit(): void {
  }

}
