import {Injectable, OnInit} from "@angular/core";
import {BehaviorSubject, filter, Observable} from "rxjs";

@Injectable()

export class ErrorMessageService implements OnInit{


  private subject = new BehaviorSubject<string[]>([]);

  errors$: Observable<string[]> = this.subject.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0)
    );

  returnErrorObservable() {
    return this.subject.asObservable()
      .pipe(
        filter(messages => messages && messages.length > 0)
      );
  }

  constructor() {
  }

  ngOnInit(): void {
  }



  showErrors(...errors: string[]) {
    this.subject.next(errors);
  }


}
