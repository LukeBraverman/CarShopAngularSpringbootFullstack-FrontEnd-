import {TestBed, waitForAsync} from '@angular/core/testing';

import { CarListStoreService } from './car-list-store.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CARSlIST, returnFakeData} from "../../fakedata/fakedata";
import {skip} from "rxjs";

describe('CarListStoreService', () => {

  let carListStoreService: CarListStoreService,
    httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CarListStoreService
      ]
    });
    carListStoreService = TestBed.inject(CarListStoreService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(carListStoreService).toBeTruthy();
  });

  it('should make GET call to  the database', () => {
    carListStoreService.carsToDisplay$.subscribe(cars => {
      expect(cars).toBeTruthy('No cars returned');
      // expect(cars[`BMW`].price).toEqual(10000); // to check price

    });

    carListStoreService.init();

    const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
    expect(req.request.method).toEqual('GET');
    req.flush(CARSlIST);
  });

  fit('should GET all 3 cars database', waitForAsync(() => {
    carListStoreService.carsToDisplay$.pipe(skip(1)).subscribe(cars => {
      console.log(cars.length)
      expect(cars.length).toEqual(3);
      // expect(cars[`BMW`].price).toEqual(10000); // to check price

    });

    carListStoreService.init();

    const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
    expect(req.request.method).toEqual('GET');
    req.flush(CARSlIST);
  }));

  // it('should GET all cars in database', () => {
  //   carListStoreService.carsToDisplay$.subscribe(cars => {
  //     // expect(cars.length).toEqual(3);
  //     // expect(cars[`BMW`].price).toEqual(10000); // to check price
  //
  //   });
  //
  //   carListStoreService.init();
  //
  //   const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(returnFakeData());
  // });


  // it('should  GET bmw car data', () => {
  //   carListStoreService.carsToDisplay$.subscribe(cars => {
  //     expect(cars[`BMW`].uid).toEqual('AAA');
  //     // expect(cars[`BMW`].price).toEqual(10000); // to check price
  //
  //   });
  //
  //   carListStoreService.init();
  //
  //   const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(CARSlIST);
  // });
  //
  // it('should  GET toyota car data', () => {
  //   carListStoreService.carsToDisplay$.subscribe(cars => {
  //     expect(cars[`TOYOTA`].uid).toEqual('BBB');
  //     // expect(cars[`BMW`].price).toEqual(10000); // to check price
  //
  //   });
  //
  //   carListStoreService.init();
  //
  //   const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(CARSlIST);
  // });
  //
  // it('should  GET honda car data', () => {
  //   carListStoreService.carsToDisplay$.subscribe(cars => {
  //     expect(cars[`HONDA`].uid).toEqual('CCC');
  //     // expect(cars[`BMW`].price).toEqual(10000); // to check price
  //
  //   });
  //
  //   carListStoreService.init();
  //
  //   const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(CARSlIST);
  // });
  //
  // afterEach(() => {
  //   httpTestingController.verify();
  // });


});
