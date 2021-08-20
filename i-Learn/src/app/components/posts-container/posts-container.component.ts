import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/Post';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {
  posts: Observable<Post[]> = new Observable<Post[]>();
   addPost(post:Post):void{
    this.postService.addPost(post);
    this.posts = this.postService.subject;
    
   }
  constructor( private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts();
    this.posts = this.postService.subject;
  }

}
