import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ShopLandingpageComponent } from './shop-landingpage.component';
import {DebugElement} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {BehaviorSubject, Observable} from "rxjs";

describe('ShopLandingpageComponent', () => {
  let component: ShopLandingpageComponent;
  let fixture: ComponentFixture<ShopLandingpageComponent>;
  let el: DebugElement;
  let carListStoreService: any;

  beforeEach(waitForAsync(() => {
    const carListStoreServiceSpy = jasmine.createSpyObj('CarListStoreService', ['init']);

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      providers: [
        {provide: CarListStoreService, useValue: carListStoreServiceSpy }
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ShopLandingpageComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        carListStoreService = TestBed.inject(CarListStoreService);
      });
  }))


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a card for each car retrieved', () => {
    carListStoreService.carsToDisplay$ = new Observable<any>();

    carListStoreService.carsToDisplay$.emit
  })
});
