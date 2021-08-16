import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {user} from '../user';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:user={
    id:0,
    username:''
  }
  login(username:string, password:string):void{
    this.user={
      id:1,
      username:username
    }
   this.router.navigateByUrl('/home');
  }
  constructor( private router:Router, private location:Location) { }
}
