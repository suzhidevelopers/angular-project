import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  checkLoginUrl : any;
  constructor(private authService: AuthService, private router: Router, private storage: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    console.log("Inside Authguard canLoad");
    let url = `/${route.path}`;
    this.checkLoginUrl = this.checkLogin(url);
    console.log("Return Login URL" + this.checkLoginUrl);
    return this.checkLoginUrl;
  }

  checkLogin(url: string): boolean {
    let userDetails: any = this.storage.getUser();
    if (userDetails) {
      this.authService.isLoggedIn = true;
      return this.authService.isLoggedIn;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
