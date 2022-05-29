import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from "rxjs";
import {CarToBuyModel} from "../../model/car-to-buy.model";
import {HttpClient} from "@angular/common/http";
import {CARSlIST} from "../../fakedata/fakedata";
import {ErrorMessageService} from "../../error-message/error-message.service";

@Injectable({
  providedIn: 'root'
})
export class CarListStoreService {

  private listOfCars:CarToBuyModel[] = [];
  private subject = new BehaviorSubject<CarToBuyModel[] >([]);

  public carsToDisplay$: Observable<CarToBuyModel[]> = this.subject.asObservable();


  onReturnCarsToDisplayObservable() {
    return this.carsToDisplay$;
  }

  constructor(private http: HttpClient,
  ) {

  }

  init() {
    //Emit an initial List of Cars that a user can buy

    const initialList$: Observable<CarToBuyModel[]>  = this.findAllCars()

    // initialList$
      // .pipe(catchError(err => {
      //   const message = "could not get car data";
      //   console.log(message, err);
      //   return throwError(err);
      // }))
      .pipe( map(cars => {
        console.log('in INIT')
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

        return listOfCars;
        // this.subject.next(listOfCars)
      })
      );
      return initialList$;


  }

  emitInitList(res: CarToBuyModel[]) {
    this.subject.next(res);
  }

  findAllCars() {
    return this.http.get('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
  }

}
