import { Component, OnInit } from '@angular/core';
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {catchError, delay, map, Observable, tap, throwError} from "rxjs";
import {CarToBuyModel} from "../model/car-to-buy.model";
import {ErrorMessageService} from "../error-message/service/error-message.service";
import {LoadingSpinnerService} from "../loading-spinner/loading-spinner.service";

@Component({
  selector: 'app-shop-landingpage',
  templateUrl: './shop-landingpage.component.html',
  styleUrls: ['./shop-landingpage.component.css'],
  providers: [ErrorMessageService, LoadingSpinnerService]
})
export class ShopLandingpageComponent implements OnInit {

  listOfCarsToDisplay$!: Observable<CarToBuyModel[]>;

  constructor(private carListStoreService:CarListStoreService,
              private errorMessageService:ErrorMessageService,
              private loadingSpinnerService: LoadingSpinnerService) { }

  ngOnInit(): void {
    this.listOfCarsToDisplay$ =
      this.carListStoreService.onReturnCarsToDisplayObservable();

    this.carListStoreService.generateInitialList()
        .pipe(
          tap(() => this.loadingSpinnerService.turnOnSpinner()),
          delay(2000),
          catchError(err => {
            const message = "could not get car data";
            console.log(message, err);
            this.errorMessageService.showErrors(message);
            return throwError(err);
          })).subscribe(res => {
            this.loadingSpinnerService.turnOfSpinner();
            this.carListStoreService.emitInitList(res);
    },
      );


  }

  onCarSelcted($event: CarToBuyModel) {

    console.log($event)
  }
}
