import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ISoldierPage {
  idnumber: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  timeOfPositioningDate: string,
  timeOfPositioningTime: string,
  placeOfPositioning: string,
  hasDeclaredInocense: boolean,
  wasInBaseDuringPos: boolean,
  wasSentToConfinment: boolean,
  firstNameCommander: string,
  lastNameCommander: string,
  phoneNumberCommander: string,
}

@Injectable({
  providedIn: 'root'
})
export class SoldierService {

  constructor(private http: HttpClient) { }

  create(json: ISoldierPage): Observable<Object> {
  // create(json: ISoldierPage) {
    
    const res = {
      suspectIdentityNumber: json.idnumber,
      suspectFirstName: json.firstName,
      suspectLastName: json.lastName,
      suspectPhoneNumer: json.phoneNumber,
      suspectTimeOfPositioning: `${json.timeOfPositioningDate}T${json.timeOfPositioningTime}:00.000Z`,
      suspectPlaceOfPositioning: json.placeOfPositioning,
      reporterFirstName: json.firstNameCommander,
      reporterLastName: json.lastNameCommander,
      reporterRank: 1,
      reporterIdentityNumber: '',
      reporterMail: '',
      reporterPhoneNumber:  json.phoneNumberCommander,
      clinicInCharge: 1,
      suspectHasDeclaredInocense: json.hasDeclaredInocense,
      suspectWasInBaseDuringPos: json.wasInBaseDuringPos,
      suspectWasSentToConfinment: json.wasSentToConfinment,
      isColonelConfinment: false,
      isClinicConfinment: false,
      wasExported: false,
      workFinished: false,
      reporterNotes: '',
      clinicNotes: '',
      hamalNotes: ''
    }
    console.log(res);
    return this.http.post('https://coronacrud.azurewebsites.net/api/open/request/', json)
  }
}
