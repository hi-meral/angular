import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCity() {

    return ["Rajkot","Dwarka","Pune","Ahmedabad"];
  }
}
