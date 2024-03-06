import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCoffeeList() {
    return this.httpClient.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
  }
}
