import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-form-array',
  templateUrl: './new-form-array.component.html',
  styleUrls: ['./new-form-array.component.css']
})
export class NewFormArrayComponent  {

   
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {

    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let i = this.topics.controls.indexOf(topic);
    this.topics.removeAt(i);

  }

  get topics() {

    return this.form.get('topics') as FormArray;
  }
  
}
