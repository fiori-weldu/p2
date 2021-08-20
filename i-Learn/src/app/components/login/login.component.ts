import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private UserService:UserService,private  router:Router) { }
  onSubmit():void{
  console.log(this.username, this.password);
  this.UserService.login(this.username,this.password)
  
  .subscribe(data => {this.UserService.user = {
    id: data.id,
    username: data.username
    
  }
  this.error = false;
    this.router.navigateByUrl('/home');
},
(error) => this.error=true);
}

  ngOnInit(): void {
  }

}
