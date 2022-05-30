import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import {ErrorMessageService} from "./service/error-message.service";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ShopLandingpageComponent} from "../shop-landingpage/shop-landingpage.component";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";
import {By} from "@angular/platform-browser";
import {of, Subject} from "rxjs";
import {CARSlIST} from "../fakedata/fakedata";
import {AppModule} from "../app.module";

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let errorMessageService: any;

  beforeEach(async () => {

    const errorMessageServiceSpy = jasmine.createSpyObj('LoadingSpinnerService', ['showErrors', 'returnErrorObservable'] )

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

    // empty array is filtered in pipe
    errorMessageService.returnErrorObservable.and.returnValue(of([]));

    fixture.detectChanges();

    const errorMessageClassDe = fixture.debugElement.query(By.css('.message'));

    expect(errorMessageClassDe).toBeNull();


  });

  it('Should render a error message HTML when error massage is received from observable', () => {
    // empty array is filtered in pipe
    errorMessageService.returnErrorObservable.and.returnValue(of(['ERROR1']));

    fixture.detectChanges();

    const errorMessageClassDe = fixture.debugElement.query(By.css('.message'));
    const errorMessageClassNe = errorMessageClassDe.nativeElement;

    expect(errorMessageClassDe).toBeTruthy();
    expect(errorMessageClassNe.textContent).toContain('ERROR1');
  });

  it('Should render a multiple error message HTML when multiple error massages is received from observable', () => {
    // empty array is filtered in pipe
    errorMessageService.returnErrorObservable.and.returnValue(of(['ERROR1','ERROR2']));

    fixture.detectChanges();

    const errorMessageClassDe = fixture.debugElement.queryAll(By.css('.message'));
    const errorMessageClassNe = errorMessageClassDe[0].nativeElement;
    const secondErrorMessageClassNe = errorMessageClassDe[1].nativeElement;

    expect(errorMessageClassDe).toBeTruthy();
    expect(errorMessageClassNe.textContent).toContain('ERROR1');
    expect(secondErrorMessageClassNe.textContent).toContain('ERROR2')
  });

  it('should hide error message when close button is clicked', fakeAsync(() => {

    // empty array is filtered in pipe
    errorMessageService.returnErrorObservable.and.returnValue(of(['ERROR1']));

    fixture.detectChanges();

    let errorMessageClassDe = fixture.debugElement.query(By.css('.message'));

    expect(errorMessageClassDe).toBeTruthy();

    const buttonDe = fixture.debugElement.query(By.css('.close'));
    const buttonNe = buttonDe.nativeElement;

    buttonNe.click();

    fixture.detectChanges();
    flush();

    errorMessageClassDe = fixture.debugElement.query(By.css('.message'));
    expect(errorMessageClassDe).toBeFalsy();


  }));


});
