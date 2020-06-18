import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';
//import {EventEmitter} from 'selenium-webdriver';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css'],
    encapsulation : ViewEncapsulation.Emulated

})
export class MyFavouriteComponent implements OnInit {
  @Input('is-favourite') isFavourite: boolean;
  @Output('change') isChangeX = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  public onFavClick(){
      this.isFavourite = !this.isFavourite;
      this.isChangeX.emit({ newValue: this.isFavourite});
  }

}

export interface MyFavouriteComponentArgs {
    newValue : boolean
}