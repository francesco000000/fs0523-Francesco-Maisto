import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivate,  CanActivateChild,  Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate, CanActivateChild {

  constructor(private homeSvc:HomeService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.homeSvc.isLoggedIn$.pipe(map(isLoggedIn => {
      if(!isLoggedIn) this.router.navigate(['/']);

      return isLoggedIn }))
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state)
  }

}
