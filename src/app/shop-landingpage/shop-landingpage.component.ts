import { Component, OnInit } from '@angular/core';
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {Observable} from "rxjs";
import {CarToBuyModel} from "../model/car-to-buy.model";

@Component({
  selector: 'app-shop-landingpage',
  templateUrl: './shop-landingpage.component.html',
  styleUrls: ['./shop-landingpage.component.css']
})
export class ShopLandingpageComponent implements OnInit {

  listOfCarsToDisplay$!: Observable<CarToBuyModel[]>;

  constructor(private carListStoreService:CarListStoreService) { }

  ngOnInit(): void {
    this.listOfCarsToDisplay$ = this.carListStoreService.onReturnCarsToDisplayObservable();


  }

}
