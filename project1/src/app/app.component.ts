import { Component } from '@angular/core';
import { MyFavouriteComponentArgs } from './my-favourite/my-favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'project1';

    post = {
        title : "Title",
        isFavourite : false
    };

    twitter = {
        isLiked : false,
        likesCount : 716
    };

    onFavouriteChanged( args : MyFavouriteComponentArgs ){
        console.log('Favourite Clicked ' + args );
    }

    likeClicked(arg){
        console.log('Favourite Clicked ' + arg.lcount);
    }


}
