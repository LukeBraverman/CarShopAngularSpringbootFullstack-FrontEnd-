import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CarToBuyModel} from "../../model/car-to-buy.model";

@Injectable({
  providedIn: 'root'
})
export class CarListStoreService {

  private subject = new BehaviorSubject<CarToBuyModel[]>([]);

  carsToDisplay$: Observable<CarToBuyModel[]> = this.subject.asObservable();

  constructor() { }

  init() {
    //Emit an initial List of Cars that a user can buy
  }

}
