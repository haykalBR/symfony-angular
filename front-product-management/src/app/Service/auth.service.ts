import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
 private isAuthenticated:boolean = false;

  constructor(private http:HttpClient) { }

  authenticate(login:string, password:string)
  {
  	/*et payload = {login:login, password:password};

  return this.http.post(environment.baseUrl+'login', payload, httpOptions);*/

  if(login === "test" && password === "test") {
  	this.setIsAuthenticated(true);
  	return true;
  } 
  return false;
  }

  getIsAuthenticated()
  {
  return this.isAuthenticated;
  }

  setIsAuthenticated(status:boolean)
  {
  this.isAuthenticated = status;
  }

  logout()
  {
  	this.setIsAuthenticated(false);
  }
}
