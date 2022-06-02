import { Component, OnInit } from '@angular/core';
import {LoadingSpinnerService} from "./service/loading-spinner.service";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent implements OnInit {

  showSpinner = false;

  constructor(private loadingSpinnerService:LoadingSpinnerService) { }

  ngOnInit(): void {
    this.loadingSpinnerService.returnLoadingSpinnerObservable().subscribe( boolean => {
      this.showSpinner = boolean;
    });
  }




}
