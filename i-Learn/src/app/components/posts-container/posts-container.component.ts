import { Component, OnInit } from '@angular/core';
import { POSTS } from 'src/app/mock-posts';
import { Post } from 'src/app/Post';


@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {
   posts: Post[]=POSTS;
   addPost(post: Post):void{
     this.posts.push(post);
   }
  constructor() { }

  ngOnInit(): void {

  }

}
