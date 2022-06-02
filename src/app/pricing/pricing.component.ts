import { Component, OnInit } from '@angular/core';
import {catchError, filter, Observable, skip, throwError} from "rxjs";
import {CarToBuyModel} from "../model/car-to-buy.model";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {ErrorMessageService} from "../error-message/service/error-message.service";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  providers: [
    ErrorMessageService
  ]
})
export class PricingComponent implements OnInit {

  carList$!: Observable<CarToBuyModel[]>
  activeCar: CarToBuyModel | null = null;

  constructor(private carListStoreService: CarListStoreService,
              private errorMessageService:ErrorMessageService,
  ) { }

  ngOnInit(): void {
    this.carList$ = this.carListStoreService.onReturnCarsToDisplayObservable()
      .pipe(
        filter(list => list !== [])
      );

    this.carListStoreService.generateInitialList()
      .pipe(
        catchError(err => {
          const message = "could not get car data";
          this.errorMessageService.showErrors(message);
          return throwError(err);
        })
      ).subscribe(listOfCars => {
      this.carListStoreService.emitInitList(listOfCars);
    })
  }

  openCarDetail(car: CarToBuyModel) {
    this.activeCar = car;
  }

  onBackToPriceList() {
    this.activeCar = null;
  }
}
