import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  constructor(private router: Router) { }

  idNumber: number;

  ngOnInit(): void {
  }

  searchCase(): void {
    this.router.navigateByUrl(`review/${this.idNumber}`)
  }

}
