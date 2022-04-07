import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RMMConfig } from './RMMConfig';

@Injectable({
  providedIn: 'root'
})
export class RMMConfigService {

  private _configSubject = new BehaviorSubject<RMMConfig>(new RMMConfig());

  constructor() { }

  setConfig(config: RMMConfig) {
      this._configSubject.next(config);
  }

  getConfig(): Observable<any> {
      return this._configSubject.asObservable();
  }
}
