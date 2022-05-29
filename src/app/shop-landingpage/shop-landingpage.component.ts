import { Component, OnInit } from '@angular/core';
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {CarToBuyModel} from "../model/car-to-buy.model";
import {ErrorMessageService} from "../error-message/error-message.service";

@Component({
  selector: 'app-shop-landingpage',
  templateUrl: './shop-landingpage.component.html',
  styleUrls: ['./shop-landingpage.component.css'],
  providers: [ErrorMessageService]
})
export class ShopLandingpageComponent implements OnInit {

  listOfCarsToDisplay$!: Observable<CarToBuyModel[]>;

  constructor(private carListStoreService:CarListStoreService,
              private errorMessageService:ErrorMessageService) { }

  ngOnInit(): void {
    this.listOfCarsToDisplay$ =
      this.carListStoreService.onReturnCarsToDisplayObservable();

    this.carListStoreService.generateInitialList()
        .pipe(
          catchError(err => {
            const message = "could not get car data";
            console.log(message, err);
            this.errorMessageService.showErrors(message);
            return throwError(err);
          })).subscribe(res => {
            this.carListStoreService.emitInitList(res);
    });


  }

  onCarSelcted($event: CarToBuyModel) {

    console.log($event)
  }
}
