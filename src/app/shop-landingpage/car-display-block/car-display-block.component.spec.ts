import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import {CarDisplayBlockComponent} from './car-display-block.component';
import {ShopLandingpageComponent} from "../shop-landingpage.component";
import {AppComponent} from "../../app.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CarToBuyModel} from "../../model/car-to-buy.model";
import {By} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {Component, DebugElement} from "@angular/core";
import {deepEqual} from "assert";

describe('CarDisplayBlockComponent', () => {
  let component: CarDisplayBlockComponent;
  let fixture: ComponentFixture<CarDisplayBlockComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ CarDisplayBlockComponent],
      imports: [MatCardModule]

    })
      fixture = TestBed.createComponent(CarDisplayBlockComponent);
      component = fixture.componentInstance;




  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display a angular material card when [carData] is given', () => {

    let cardDe = fixture.debugElement.query(By.css('.test'));
    let cardEl = cardDe.nativeElement;
    expect(cardEl.textContent).toBeFalsy();

    let carData = "AAA";

     component.carData = {uid: carData};

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(cardEl.textContent).toContain('AAA');

    })

  });

  it('should render select car button', () => {

    let buttonDe = fixture.debugElement.query(By.css('.selectButton'));
    let buttonEl = buttonDe.nativeElement;
    expect(buttonEl.textContent).toBeTruthy();

  });

  it('should emit car data when button clicked', fakeAsync(() => {

    let buttonDe = fixture.debugElement.query(By.css('.selectButton'));
    let buttonEl = buttonDe.nativeElement;
    component.carSelected.subscribe( car => {
      expect(car).toEqual({uid: carData});
    })

    let carData = "AAA";

    component.carData = {uid: carData};

    buttonEl.click()
    fixture.detectChanges();
    flush();



  }));



});

