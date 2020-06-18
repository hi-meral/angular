import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-services.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService {

  constructor(http: HttpClient) {
    super('//api.github.com/users/mosh-hamedani/followers', http);
  }

}
