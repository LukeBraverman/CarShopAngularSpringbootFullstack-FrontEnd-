import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { ShopLandingpageComponent } from './shop-landingpage.component';
import {DebugElement} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {defer, of, throwError} from "rxjs";
import {CARSlIST} from "../fakedata/fakedata";
import {By} from "@angular/platform-browser";
import {AppModule} from "../app.module";
import {cold, getTestScheduler} from "jasmine-marbles";
import {ErrorMessageService} from "../error-message/error-message.service";

describe('ShopLandingpageComponent', () => {
  let component: ShopLandingpageComponent;
  let fixture: ComponentFixture<ShopLandingpageComponent>;
  let el: DebugElement;
  let carListStoreService: any;

  beforeEach(waitForAsync(() => {
    const carListStoreServiceSpy = jasmine.createSpyObj('CarListStoreService', ['onReturnCarsToDisplayObservable','generateInitialList', 'emitInitList']);

    TestBed.configureTestingModule({
      imports: [AppModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: CarListStoreService, useValue: carListStoreServiceSpy },
        ErrorMessageService
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

  it('should display a card for each car retrieved ', () => {

    carListStoreService.onReturnCarsToDisplayObservable.and.returnValue(of(CARSlIST));
    carListStoreService.generateInitialList.and.returnValue(of(CARSlIST));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css('.mat-tab-label'));

    expect(tabs.length).toBe(3, 'Unexpected number of tabs found');

  });

  it('should display a card for each car retrieved (async) ', fakeAsync(() => {

    carListStoreService.onReturnCarsToDisplayObservable.and.returnValue(asyncData(CARSlIST));
    carListStoreService.generateInitialList.and.returnValue(of(CARSlIST));

    fixture.detectChanges();
    tick();// flush the observable to get the quote
    fixture.detectChanges();
    tick();// flush the observable to get the quote

    const tabs = el.queryAll(By.css('.mat-tab-label'));

    expect(tabs.length).toBe(3, 'Unexpected number of tabs found');

  }));

  it('should display a card for each car retrieved (Marble) ',async () => {

    let carsFromDatabase$ = cold('(a|)', {a: CARSlIST});

    carListStoreService.onReturnCarsToDisplayObservable.and.returnValue(carsFromDatabase$);
    carListStoreService.generateInitialList.and.returnValue(of(carsFromDatabase$));

    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();


    const tabs = el.queryAll(By.css('.mat-tab-label'));


    expect(tabs.length).toBe(3, 'Unexpected number of tabs found');

  });

  fit('should give an error if cannot get courses from database', () => {
    carListStoreService.onReturnCarsToDisplayObservable.and.returnValue(throwError({status:404}));
    carListStoreService.generateInitialList.and.returnValue(throwError({status:404}));
    fixture.detectChanges();

    const tabs = el.queryAll(By.css('.mat-tab-label'));
    const errorMessage = fixture.debugElement.query(By.css('.message'));
    const errorMessageNe = errorMessage.nativeElement;


    expect(tabs.length).toBe(0, 'Unexpected number of tabs found');
    expect(errorMessageNe).toBeTruthy();

  })
});
/**
 * Create async observable that emits-once and completes
 * after a JS engine turn
 */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
//todo:
/*
  concat map-
  merge map-
  exhaust map-
  switch map-
  error handle
 */

