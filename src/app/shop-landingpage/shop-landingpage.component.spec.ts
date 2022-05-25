import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ShopLandingpageComponent } from './shop-landingpage.component';
import {DebugElement} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {CARSlIST} from "../fakedata/fakedata";
import {By} from "@angular/platform-browser";

describe('ShopLandingpageComponent', () => {
  let component: ShopLandingpageComponent;
  let fixture: ComponentFixture<ShopLandingpageComponent>;
  let el: DebugElement;
  let carListStoreService: any;

  beforeEach(waitForAsync(() => {
    const carListStoreServiceSpy = jasmine.createSpyObj('CarListStoreService', ['onReturnCarsToDisplayObservable']);

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
    carListStoreService.onReturnCarsToDisplayObservable.and.returnValue(of(CARSlIST));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css('.mat-card'));

    expect(tabs.length).toBe(3, 'Unexpected number of tabs found');


  })
});
