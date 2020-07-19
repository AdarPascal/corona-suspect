import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApigetService } from '../apiget.service';
import * as moment from 'moment';

@Component({
  selector: 'app-captain-screen',
  templateUrl: './captain-screen.component.html',
  styleUrls: ['./captain-screen.component.css']
})
export class CaptainScreenComponent implements OnInit {

  personId: string;
  personData: object;
  constructor(private route: ActivatedRoute, private apigetservice: ApigetService, private router: Router) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get("id");
    this.apigetservice.getPersonData(this.personId).subscribe((res) => {
      this.personData = res;
      console.log(this.personData)
    });
  }

  getPersonData() {
    if(this.personData) {
      return this.getPersonData
    }
  }

  parseTime(time) {
    return moment(time).format('HH:MM DD/MM/YY');
  }

}
