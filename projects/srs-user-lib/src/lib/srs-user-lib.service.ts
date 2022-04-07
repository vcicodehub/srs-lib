import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SRSUser } from './SRSUser';

@Injectable({
  providedIn: 'root'
})
export class SRSUserService {

  private _userSubject = new BehaviorSubject<SRSUser>(new SRSUser());

  constructor() { }

  setUser(user: SRSUser) {
      this._userSubject.next(user);
  }

  getUser(): Observable<any> {
      return this._userSubject.asObservable();
  }
}
