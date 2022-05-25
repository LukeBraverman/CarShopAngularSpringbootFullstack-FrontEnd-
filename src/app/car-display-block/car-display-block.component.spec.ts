import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CarDisplayBlockComponent} from './car-display-block.component';
import {ShopLandingpageComponent} from "../shop-landingpage/shop-landingpage.component";
import {AppComponent} from "../app.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CarToBuyModel} from "../model/car-to-buy.model";
import {By} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {Component, DebugElement} from "@angular/core";

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

  fit('Should display a angular material card when [carData] is given', () => {

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



});

