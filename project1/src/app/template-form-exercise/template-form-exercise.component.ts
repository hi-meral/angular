import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-exercise',
  templateUrl: './template-form-exercise.component.html',
  styleUrls: ['./template-form-exercise.component.css']
})
export class TemplateFormExerciseComponent implements OnInit {


  foods = [
    { id:1 , name:"Burge" },
    { id:2 , name:"Pizza" },
    { id:3 , name:"Sizzler" },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
