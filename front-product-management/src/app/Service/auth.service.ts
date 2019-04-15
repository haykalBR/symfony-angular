import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { Inject } from '@angular/core';  



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
 private isAuthenticated:boolean = false;

  constructor(private http:HttpClient,@Inject(LOCAL_STORAGE) private storage: StorageService) { }

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
    if(!this.isAuthenticated) {
     if(true == this.storage.get('isAuthenticated')) {
      this.isAuthenticated = true;
      return true;
     }
      return false;
    }
    return true;

  return this.isAuthenticated;
  }

  setIsAuthenticated(status:boolean)
  {
  this.isAuthenticated = status;
  this.storage.set('isAuthenticated', status);
  }

  logout()
  {
  	this.setIsAuthenticated(false);
    this.storage.remove("isAuthenticated");
  }
}
