import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ISoldierPage {
  idnumber: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  timeOfPositioning: String,
  placeOfPositioning: String,
  hasDeclaredInocense: Boolean,
  wasInBaseDuringPos: Boolean,
  wasSentToConfinment: Boolean,
  firstNameCommander: String,
  lastNameCommander: String,
  phoneNumberCommander: String,
}

@Injectable({
  providedIn: 'root'
})
export class SoldierService {

  constructor() { }

  create(json: ISoldierPage) {
    
    const res = {
      suspectIdentityNumber: json.idnumber,
      suspectFirstName: json.firstName,
      suspectLastName: json.lastName,
      suspectPhoneNumer: json.phoneNumber,
      suspectTimeOfPositioning: json.timeOfPositioning,
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
  }
}
