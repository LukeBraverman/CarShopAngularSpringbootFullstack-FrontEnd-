import {LoadingSpinnerService} from "./loading-spinner.service";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {skip} from "rxjs";

describe('LoadingSpinnerService', () => {

  let loadingSpinnerService:LoadingSpinnerService;


  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [],
      providers: [
        LoadingSpinnerService
      ]

    });

    loadingSpinnerService = TestBed.inject(LoadingSpinnerService);

  })

  it('should be created', () => {
    expect(loadingSpinnerService).toBeTruthy();
  });

  it('Should emit false on initial subscription', () => {

    loadingSpinnerService.returnLoadingSpinnerObservable().subscribe(boolean => {
        expect(boolean).toBe(false);
      }
    );

  });

  it('Should emit false when turnOffSpinnerCalled called after onInIt', fakeAsync(() => {

    loadingSpinnerService.returnLoadingSpinnerObservable().pipe(skip(1)).subscribe(boolean => {
        expect(boolean).toBe(false);
      }
    );

    setTimeout(
      () => {
        loadingSpinnerService.turnOfSpinner();
      }
      ,2000)

    tick(2000);

  }));

  it('Should emit true when turnOnSpinnerCalled called after onInIt', fakeAsync(() => {

    loadingSpinnerService.returnLoadingSpinnerObservable().pipe(skip(1)).subscribe(boolean => {
        expect(boolean).toBe(true);
      }
    );

    setTimeout(
      () => {
        loadingSpinnerService.turnOnSpinner();
      }
      ,2000)

    tick(2000);

  }));


});
