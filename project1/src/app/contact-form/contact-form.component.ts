import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  contactMethods = [
    { id:1 , name: "Email" },
    { id:2 , name: "Phone" },
    { id:3 , name: "SMS" },
  ];

  subjectOfInterest = [
    { id:"1" , name : "Travel" },
    { id:"2" , name : "Food" },
    { id:"3" , name : "Sports" },
    { id:"4" , name : "Movies" },
  ]

  public fun1 (x){
    console.log(x);
  }

  onSubmit(f: NgForm) {
    console.log(f);
    //console.log(f.value);  // { first: '', last: '' }
    //console.log(f.valid);  // false
  }
}
