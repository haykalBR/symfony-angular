import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
  /** in case authenticated **/
   if(this.authService.getIsAuthenticated()) {
     /** in case authenticated and want to go to login disallow **/
     if(state.url === '/login') {
       return false;
     }
     /** authenticated and want to go to different page **/
   	return true;
   }
   /** not authenticated and want to go to page, disallow except for login **/
   if(state.url !== '/login') {
   this.router.navigateByUrl('login');
 }
 /** allow for authenticated **/
   return true;
    
  
 }
  
}
