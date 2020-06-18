import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Response } from 'selenium-webdriver/http';

import { DataService } from './data-services.service';

@Injectable({
  providedIn: 'root'
})
export class PostDateServicesService extends DataService {

  constructor(http: HttpClient) {
    super('//jsonplaceholder.typicode.com/posts', http);
  }

}
