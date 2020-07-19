import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApigetService } from '../apiget.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component'

@Component({
  selector: 'app-captain-screen',
  templateUrl: './captain-screen.component.html',
  styleUrls: ['./captain-screen.component.css']
})

export class CaptainScreenComponent implements OnInit {

  personId: string;
  personData;
  sentFlag: boolean;
  allDataFull: boolean;
  ranks = [
    { value: 1, viewValue: 'סא"ל' },
    { value: 2, viewValue: 'אל"מ' },
    { value: 3, viewValue: 'תא"ל' }
  ];

  constructor(private route: ActivatedRoute, private apigetservice: ApigetService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get("id");
    this.apigetservice.getPersonData(this.personId).subscribe((res) => {
      this.personData = res;
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent, { disableClose: true });
  }

  getPersonData() {
    if (this.personData) {
      return this.getPersonData
    }
  }

  parseTime(time) {
    return moment(time).format('HH:MM DD/MM/YY');
  }

  booleanToHebrewString(input: boolean): string { return input ? "חיובי" : "שלילי" }

  confirmation(accept: boolean) {
    this.personData.isColonelConfinment = accept;
    this.sentFlag = true;
    this.apigetservice.putPersonData(this.personData).subscribe((res) => {
      this.openDialog();
    });
  }

  isAllDataFull() {
    if (this.personData) {
      if (this.personData.reporterIdentityNumber && this.personData.reporterFirstName
        && this.personData.reporterLastName && this.personData.reporterPhoneNumber &&
        this.personData.reporterRank && this.personData.reporterMail) {
        return true;
      } else {
        return false;
      }
    }
  }

}
