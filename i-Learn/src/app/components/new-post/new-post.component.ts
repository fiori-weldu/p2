import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

import {  Post} from "../../Post";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter
  user: string='user'
  content:string=" "
  likes:number=0;
  error:boolean=false;
  constructor() { }
 onSubmit():void{
   if(!this.content){
     this.error=true;
     return;
   }
   const newPost:Post={
     id:0,
     user:this.user,
     content:this.content,
     likes:this.likes
   }
   this.onAddPost.emit(newPost);
   this.content='';
   this.error=false;
 }
  ngOnInit(): void {
  }

}
