import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-soldier-form',
  templateUrl: './soldier-form.component.html',
  styleUrls: ['./soldier-form.component.css']
})
export class SoldierFormComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
