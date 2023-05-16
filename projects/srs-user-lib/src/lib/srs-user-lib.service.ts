import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SRSUser } from './SRSUser';
import { FeatureToggle } from './feature-toggle';

@Injectable({
  providedIn: 'root'
})
export class SRSUserService {

  private _userSubject = new BehaviorSubject<SRSUser>(new SRSUser());
  private _featureToggleList: FeatureToggle[] = [];

  constructor() { }

  get featureToggleList() {
    return this._featureToggleList;
  }
  set featureToggleList(features: FeatureToggle[]) {
    this._featureToggleList = features;
  }

  setUser(user: SRSUser) {
      this._userSubject.next(user);
  }

  getUser(): Observable<any> {
      return this._userSubject.asObservable();
  }
  
  /**
   * Helper method to determine if the given feature is valid for the
   * current application state.
   * @param feature 
   * @returns boolean
   */
  hasFeature(feature: string): boolean {
    let user = this._userSubject.getValue();
    const shopNumber: string | undefined = user.shopNumber;
    const employeeNumber = user.employeeId?.toString();

    const featureToggleList: FeatureToggle[] = this.featureToggleList;
    //console.log("===> Feature Toggle", featureToggleList);

    if (!shopNumber && !employeeNumber) {
      return false;
    }

    let found: boolean = false;
    if (featureToggleList) {
      let featureToggle = featureToggleList.find(f => (f.name === feature && f.shopNumberList?.find(s => s === '*')));
      if (featureToggle) {
        console.log("===> Found shop * feature toggle match for feature " + feature);
        found = true;
      }
      if (employeeNumber) {
        featureToggle = featureToggleList.find(f => (f.name === feature && f.employeeNumberList?.find(e => e === employeeNumber )));
        if (featureToggle) {
          console.log("===> Found employee ID " + employeeNumber + " feature toggle match for feature " + feature);
          found = true;
        }
      }
      featureToggle = featureToggleList.find(f => (f.name === feature && f.shopNumberList?.find(s => s === shopNumber)));
      if (featureToggle) {
        console.log("===> Found shop number " + shopNumber + " feature toggle match for feature " + feature);
        found = true;
      }
      let strShopNumber = shopNumber ? shopNumber.toString() : '';
      featureToggle = featureToggleList.find(f => f.name === feature && f.repairDistrictShopList?.includes(strShopNumber));
      if (featureToggle) {
        console.log("===> Found shop number " + shopNumber + " in district feature toggle match for feature " + feature);
        found = true;
      }
  }
    return found;
  }
}

