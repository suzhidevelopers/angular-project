import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/index';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { BackendService } from 'angular-in-memory-web-api/backend.service';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  constructor(private storageService: StorageService) { 
    
  }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(tap(val => this.isLoggedIn = true));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}