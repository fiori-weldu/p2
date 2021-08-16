
import { Component, OnInit , Input} from '@angular/core';
import {Post} from '../../Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post: Post={
  id:0,
  user:'',
  content:'',
  likes:0
};
liked: boolean=false;
likePost(): void{
  if(this.liked){
    this.liked=!this.liked
    this.post.likes--;
  }
  else{
    this.liked=!this.liked;
    this.post.likes++;
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
