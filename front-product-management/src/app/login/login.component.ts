import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	errors:boolean = false;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }
  postLogin(login,password)
  {
  if(this.authService.authenticate(login, password)) {
  this.router.navigateByUrl('/');
  } else {
  this.errors = true;
  }


  }

}
