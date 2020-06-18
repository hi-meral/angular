import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tweeter-likes',
  templateUrl: './tweeter-likes.component.html',
  styleUrls: ['./tweeter-likes.component.css']
})
export class TweeterLikesComponent implements OnInit {

  @Input('isActive') isActive :boolean;
  @Input('likesCount') likesCount:number;
  @Output('addLikeClick') changex = new EventEmitter();

  constructor() { }

  lclicked(){
      this.isActive = !this.isActive;

      if(this.isActive)
      {
          this.likesCount++;
      }
      else {
        this.likesCount--;
      }

      this.changex.emit({ active : this.isActive, lcount : this.likesCount });
  }

  ngOnInit() {
  }

}
