// import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {POSTS } from 'src/app/mock-posts';
import { Post } from "../Post";
import {Observable, throwError, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserService} from './user.service'
@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  post: Post[]=[]
   subject: Subject<Post[]> = new Subject<Post[]>();
  constructor(private http: HttpClient, private userService:UserService) { }
  getPosts(){
  this.http.get<Post[]>('http://localhost:8080/discussion/create')
    .pipe(
      catchError((e)=> {
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          this.post = data;
          this.subject.next(this.post);
        }
      )
  }

  addPost(post: Post){
    let obj = {
      userId: this.userService.user.id,
      content: post.content
    }

    this.http.post('http://localhost:8080/discussion/create', JSON.stringify(obj))
    .pipe(
      catchError((e)=>{
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          console.log(data);
          this.post.unshift(post);
          this.subject.next(this.post);
        }
      )
  }
}
