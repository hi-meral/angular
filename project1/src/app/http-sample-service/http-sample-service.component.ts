import { Component, OnInit } from '@angular/core';
import { PostDateServicesService } from "./../services/post-date-services.service";
import { Response } from 'selenium-webdriver/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'app-http-sample-service',
  templateUrl: './http-sample-service.component.html',
  styleUrls: ['./http-sample-service.component.css']
})
export class HttpSampleServiceComponent implements OnInit {
  posts : any;

    constructor(private service : PostDateServicesService) {

   }

   ngOnInit() {
     this.service.getAll()
       .subscribe(data => this.posts = data);
   }

  createPost(input: HTMLInputElement)
  {
    let post : any = { title : input.value , id : 0 }
    this.posts.splice(0, 0, post);
    this.service.create(post)
      .subscribe(response => {
        console.log(response);
       // post.id = response.id;
        console.log(response);
       
      input.value = '';
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadRequestError) {
          //this.form.setErrors(error);
        } else throw error;
        
      })
  }

  updatePost(post){
      this.service.update(post).subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post){
    this.service.delete(345)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      },
      (error: AppError) => {

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted;')
        }
        else throw error;
      });
  }



}
