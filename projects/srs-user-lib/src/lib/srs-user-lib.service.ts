import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrsUserLibService {

  private _userID: string;

  constructor() {
    this._userID  = "hippophobia";
   }

  public get userID() {
    return this._userID;
  }
  public set userID(value: string) {
    this._userID = value;
  }


}
