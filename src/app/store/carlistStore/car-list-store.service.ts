import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {CarToBuyModel} from "../../model/car-to-buy.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarListStoreService {

  private subject = new BehaviorSubject<any>([]);

  carsToDisplay$: Observable<any> = this.subject.asObservable();

  constructor(private http: HttpClient) {

  }

  init() {
    //Emit an initial List of Cars that a user can buy

    const initialList$ = this.http.get('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');

    initialList$
      .subscribe(
        cars  => {
          console.log('in service')
          console.log(cars)
          this.subject.next(cars)
        }

      );
  }

}
