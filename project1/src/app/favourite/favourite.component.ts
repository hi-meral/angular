import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourtie',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isAct: boolean = false;
  numX: number = Math.random();
  email = "hi.meral@gmail.com";

  course = {
    title: "Angular Course",
    no1: 1234,
    newdate: new Date("2019-09-10"),
    summarytext: 'Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum '
  }
  constructor() { }

  ngOnInit() {
  }

  onClick1() {
    this.isAct = !this.isAct;
  }

  OnKeyUp() {


    alert(this.email);
  }
}
