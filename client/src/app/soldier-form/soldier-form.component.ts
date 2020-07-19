import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SoldierService, ISoldierPage } from './soldier.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../captain-screen/dialog/dialog.component';

@Component({
  selector: 'app-soldier-form',
  templateUrl: './soldier-form.component.html',
  styleUrls: ['./soldier-form.component.css']
})
export class SoldierFormComponent implements OnInit {
  profileForm = new FormGroup({
    idnumber: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    timeOfPositioningDate: new FormControl('', [Validators.required]),
    timeOfPositioningTime: new FormControl('', [Validators.required]),
    placeOfPositioning: new FormControl('', [Validators.required]),
    hasDeclaredInocense: new FormControl(null, [Validators.required]),
    wasInBaseDuringPos: new FormControl(null, [Validators.required]),
    wasSentToConfinment: new FormControl(null, [Validators.required]),
    firstNameCommander: new FormControl('', [Validators.required]),
    lastNameCommander: new FormControl('', [Validators.required]),
    phoneNumberCommander: new FormControl('', [Validators.required]),
  });

  constructor(public soldierService: SoldierService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  onSend() {
    this.soldierService.create(this.profileForm.value as ISoldierPage).subscribe((res: any) => {
      // console.log(res);
      if(res) {
        this.profileForm.reset();
        this.dialog.open(DialogComponent, { disableClose: true });
      }
    });
  }

}
