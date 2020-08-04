import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
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
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string, doNavigate?: boolean): boolean {
    let userDetails: any = this.storage.getUser();
    if (userDetails) {
      this.authService.isLoggedIn = true;
      if (doNavigate) this.router.navigateByUrl(`/${url}`);
      return this.authService.isLoggedIn;
    }
    // If needed role based rediction can be done

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'session_id': sessionId },
    //   fragment: 'anchor'
    // };

    // Navigate to the login page with extras
    // this.router.navigate(['/login'], navigationExtras);
    this.router.navigate(['/login']);
    return false;
  }
}
