import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Database } from '../database';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService  {

  private itemsURL = 'api/items';

  constructor( private http: HttpClient) {}

/* GET items from the db */
  load() {
  return this.http.get('api/items');
  }
}
