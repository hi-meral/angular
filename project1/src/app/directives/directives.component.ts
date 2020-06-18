import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  courses = [
      1,2,3
  ];

  newCourses;
  viewMode = 'map';
  canSave = true;

  onLoad()
  {
      this.newCourses = [
          { id:1, name:"physics" },
          { id:2, name:"Maths" },
          { id:3, name:"Chemistry" }
      ]
  }
  onAdd()
  {
    this.newCourses.push({ id:4, name:"Course 4" });
  }

  onDelete(nc)
  {
    let index = this.newCourses.indexOf(nc);
    this.newCourses.splice(index,1);
  }

    trackById1(index,newCourses)
    {
        return newCourses ? newCourses.id : 'undefined';
    }
  constructor() { }

  ngOnInit() {
  }

}
