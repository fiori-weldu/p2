import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {  UserService} from "../../services/user.service";
import {  Post} from "../../Post";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter
  username: string='user'
  content:string=" "
  likes:number=0;
  date:Date=new Date();
  error:boolean=false;
  constructor(private userService:UserService) { }
 onSubmit():void{
   if(!this.content){
     this.error=true;
     return;
   }
   const newPost:Post={
     id:0,
     username:this.userService.user.username ,
     content:this.content,
     likes:this.likes,
     date: new Date()
   }
   this.onAddPost.emit(newPost);
   this.content='';
   this.error=false;
 }
  ngOnInit(): void {
  }

}
