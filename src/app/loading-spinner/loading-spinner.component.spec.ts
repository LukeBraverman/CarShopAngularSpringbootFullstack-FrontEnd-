import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';
import {LoadingSpinnerService} from "./service/loading-spinner.service";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;
  let loadingSpinnerService:any;

  beforeEach(async () => {
    const loadingSpinnerSpy = jasmine.createSpyObj('ErrorMessageService', ['returnLoadingSpinnerObservable'] )

    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponent ],
      providers:[
        {provide: LoadingSpinnerService, useValue: loadingSpinnerSpy}
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LoadingSpinnerComponent);
        component = fixture.componentInstance;
        loadingSpinnerService = TestBed.inject(LoadingSpinnerService);
      })
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display loading spinner if false received', () => {

    loadingSpinnerService.returnLoadingSpinnerObservable.and.returnValue(of(false));

    fixture.detectChanges();

    const errorMessageClassDe = fixture.debugElement.queryAll(By.css('.spinner'));

    expect(errorMessageClassDe.length).toBe(0);

  });

  it('should  display loading spinner if true received', () => {

    loadingSpinnerService.returnLoadingSpinnerObservable.and.returnValue(of(true));

    fixture.detectChanges();

    const errorMessageClassDe = fixture.debugElement.queryAll(By.css('.spinner'));

    expect(errorMessageClassDe.length).toBe(1);

  });
});
