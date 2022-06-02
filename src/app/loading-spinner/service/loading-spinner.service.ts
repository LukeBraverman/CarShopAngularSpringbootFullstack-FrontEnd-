import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()

export class LoadingSpinnerService  {

  private subject = new BehaviorSubject<boolean>(false);

  returnLoadingSpinnerObservable() {
    return this.subject.asObservable();
  }

  turnOnSpinner() {
    this.subject.next(true);
  }

  turnOfSpinner() {
    this.subject.next(false);
  }

}
