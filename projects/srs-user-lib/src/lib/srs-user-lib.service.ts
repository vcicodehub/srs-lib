import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrsUserLibService {

  private subject = new BehaviorSubject<string>("");

  constructor() {
    console.log('SrsUserLibService created.');
  }

  setUserID(message: string) {
      this.subject.next(message);
  }

  getUserID(): Observable<any> {
      return this.subject.asObservable();
  }
}
