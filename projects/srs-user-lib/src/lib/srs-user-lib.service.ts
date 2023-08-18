import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SRSUser } from './SRSUser';
import { FeatureToggle } from './feature-toggle';

@Injectable({
  providedIn: 'root'
})
export class SRSUserService {

  private _userSubject = new BehaviorSubject<SRSUser>(new SRSUser());
  private _featureToggleListSubject = new BehaviorSubject<FeatureToggle[]>([]);

  constructor() { }

  setFeatureToggleList(features: FeatureToggle[]) {
    this._featureToggleListSubject.next(features);
  }

  getFeatureToggleList(): Observable<any> {
    return this._featureToggleListSubject.asObservable();
  }

  setUser(user: SRSUser) {
      this._userSubject.next(user);
  }

  getUser(): Observable<any> {
      return this._userSubject.asObservable();
  }
  
}

