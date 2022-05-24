import { TestBed } from '@angular/core/testing';

import { CarListStoreService } from './car-list-store.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CARSlIST} from "../../fakedata/fakedata";

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

  it('should GET all cars in stock listed in the database', () => {
    carListStoreService.carsToDisplay$.subscribe(cars => {
      expect(cars).toBeTruthy('No cars returned');
    });

    const req = httpTestingController.expectOne('https://carshop-a3938-default-rtdb.europe-west1.firebasedatabase.app/CARS.json');
    expect(req.request.method).toEqual('GET');
    req.flush({payload: Object.values(CARSlIST)});
  });


});
