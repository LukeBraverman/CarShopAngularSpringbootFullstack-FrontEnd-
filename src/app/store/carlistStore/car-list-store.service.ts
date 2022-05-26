import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {CarToBuyModel} from "../../model/car-to-buy.model";
import {HttpClient} from "@angular/common/http";
import {CARSlIST} from "../../fakedata/fakedata";

@Injectable({
  providedIn: 'root'
})
export class CarListStoreService {

  private subject = new BehaviorSubject<CarToBuyModel[] >([]);

  public carsToDisplay$: Observable<CarToBuyModel[]> = this.subject.asObservable();


  onReturnCarsToDisplayObservable() {
    return this.carsToDisplay$;
  }

  constructor(private http: HttpClient) {

  }

  init() {
    //Emit an initial List of Cars that a user can buy

    const initialList$ = this.findAllCars();

    initialList$
      .subscribe(
        cars  => {
          let listOfCars: CarToBuyModel[] = [];



          if (cars) {

            listOfCars.push({
              // @ts-ignore
              uid: cars[`BMW`]?.uid,
              // @ts-ignore
              profilePic: cars[`BMW`]?.profilePic,
            });
            listOfCars.push({
              // @ts-ignore
              uid: cars[`Honda`]?.uid,
              // @ts-ignore
              profilePic: cars[`Honda`]?.profilePic,
            });
            listOfCars.push({
              // @ts-ignore
              uid: cars[`Toyota`]?.uid,
              // @ts-ignore
              profilePic: cars[`Toyota`]?.profilePic,
            });
          }


          this.subject.next(listOfCars)
        }

      );
  }

  findAllCars() {
    return this.http.get('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
  }

}
