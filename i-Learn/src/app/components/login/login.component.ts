import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private UserService:UserService) { }
  onSubmit():void{
  console.log(this.username, this.password);
  this.UserService.login(this.username,this.password);
  }
  ngOnInit(): void {
  }

}
