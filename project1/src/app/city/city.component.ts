import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  title = "List Of City";
  cities;

  constructor(service: CityService) {
    this.cities = service.getCity();
  }

  ngOnInit() {
  }

}
