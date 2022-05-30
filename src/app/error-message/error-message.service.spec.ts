import {ErrorMessageService} from "./error-message.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CarListStoreService} from "../store/carlistStore/car-list-store.service";

describe('ErrorMessageService', () => {


  let errorMessageService:ErrorMessageService;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ErrorMessageService
      ]
    });
    errorMessageService = TestBed.inject(ErrorMessageService);
  });


  it('should be created', () => {
    expect(errorMessageService).toBeTruthy();
  });

  it('should emit when function "show errors" called', () => {
    errorMessageService.errors$.subscribe( errorList => {
      expect(errorList).toBeTruthy();
    });

    errorMessageService.showErrors('ERROR1','ERROR2');
  });

  it('Should emit array of length equal to strings given in function', () => {

    errorMessageService.errors$.subscribe( errorList => {
      expect(errorList).toBeTruthy();
      expect(errorList.length).toEqual(2);
    });

    errorMessageService.showErrors('ERROR1','ERROR2');

  });

});
