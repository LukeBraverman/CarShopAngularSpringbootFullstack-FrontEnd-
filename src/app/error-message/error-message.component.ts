import { Component, OnInit } from '@angular/core';
import {Observable, tap} from "rxjs";
import {ErrorMessageService} from "./error-message.service";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  showMessages = false;

  errors$!: Observable<string[]>;


  constructor(public messagesService: ErrorMessageService) {

    console.log("Created messages component");

  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$
      .pipe(
        tap(() => this.showMessages = true)
      );

  }


  onClose() {
    this.showMessages = false;

  }
}
