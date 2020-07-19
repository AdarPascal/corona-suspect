import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../environments/config';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {

  constructor(private http: HttpClient) { }

  getPersonData(id) {
    return this.http.get(config.getPersonDataUrl(id));
  }

  putPersonData(personData) {
    return this.http.put(`${config.serverHost}/${personData._id}`, personData)
  }
}