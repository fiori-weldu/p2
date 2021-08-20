import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {user} from '../user';
import {Location} from '@angular/common';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:user={
    id:0,
    username:''
  }
  login(username:string, password:string):Observable<user>{
   
    return this.http.post<user>("http://localhost:8080/api/users/login", JSON.stringify({username, password}),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(catchError((e) => {
   
    return throwError(e);
    }));

  }
  constructor( private http:HttpClient) { }
}
 