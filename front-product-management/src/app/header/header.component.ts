import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
  getAuthStatus() {
    return this.authService.getIsAuthenticated();
  }
  logout() {
  	this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
