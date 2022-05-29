import {Injectable} from "@angular/core";
import {BehaviorSubject, filter, Observable} from "rxjs";

@Injectable()

export class ErrorMessageService {


  private subject = new BehaviorSubject<string[]>([]);

  errors$: Observable<string[]> = this.subject.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0)
    );

  showErrors(...errors: string[]) {
    console.log('show errors called')
    this.subject.next(errors);
  }
}
