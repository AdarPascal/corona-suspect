import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../environments/config';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {

  constructor(private http: HttpClient) { }

  getPersonData(id) {
    return this.http.get(`${config.serverHost}/${config.getPersonDataUrl(id)}`);
  }
}