import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './shipping-box-exercise.component.html',
  styleUrls: ['./shipping-box-exercise.component.css']
})
export class ShippingBoxExerciseComponent implements OnInit {

  @Input('title')  title : string;

  public isExpanded:boolean = true;

  toogle(){
    this.isExpanded = !this.isExpanded;
  }
  constructor() { }

  ngOnInit() {
  }

}
