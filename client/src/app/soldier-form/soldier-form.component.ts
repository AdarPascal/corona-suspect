import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-soldier-form',
  templateUrl: './soldier-form.component.html',
  styleUrls: ['./soldier-form.component.css']
})
export class SoldierFormComponent implements OnInit {
  profileForm = new FormGroup({
    idnumber: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    TimeOfPositioning: new FormControl(''),
    PlaceOfPositioning: new FormControl(''),
    HasDeclaredInocense: new FormControl(''),
    WasInBaseDuringPos: new FormControl(''),
    WasSentToConfinment: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.log(this.profileForm.value);
  // }

}
