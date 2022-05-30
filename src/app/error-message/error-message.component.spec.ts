import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import {ErrorMessageService} from "./error-message.service";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ShopLandingpageComponent} from "../shop-landingpage/shop-landingpage.component";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {By} from "@angular/platform-browser";
import {of, Subject} from "rxjs";
import {CARSlIST} from "../fakedata/fakedata";
import {AppModule} from "../app.module";

fdescribe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let errorMessageService: any;

  beforeEach(async () => {

    const errorMessageServiceSpy = jasmine.createSpyObj('ErrorMessageService', ['showErrors', 'returnErrorObservable'] )

    await TestBed.configureTestingModule({
      imports: [AppModule, NoopAnimationsModule],
      declarations: [ ErrorMessageComponent ],
      providers: [
        {provide: ErrorMessageService, useValue: errorMessageServiceSpy}
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ErrorMessageComponent);
        component = fixture.componentInstance;
        errorMessageService = TestBed.inject(ErrorMessageService);
      });
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display no message when no array from observable is received', () => {
    let errorSubject = new Subject();

    // empty array is filtered in pipe
    errorMessageService.returnErrorObservable.and.returnValue(of([]));

    fixture.detectChanges();

    const errorMessageClassDe = fixture.debugElement.query(By.css('.message'));
    // const errorMessageClassNe = errorMessageClassDe.nativeElement;

    expect(errorMessageClassDe).toBeNull();


  });


});
