import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/index';
import { takeUntil, tap } from 'rxjs/operators';
import { config } from '../../config';
import { StorageService } from './storage.service';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  constructor(private http: HttpClient, private storageService: StorageService) { }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  getUsersLoggedIn(sessionObject): Observable<any> {
    let orgId = sessionObject.orgId;
    let url = `${config.BASE_URL}/${orgId}/user/${sessionObject.userId}`;
    let HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    return this.http.get(`${url}`)
  }

  azureResolveToken(token): Observable<any> {
    let url = `${config.BASE_URL}/azure/saas/fulfillment/resolve`;
    let HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    return this.http.post(`${url}`, token);
    // let parsedObject = JSON.parse(sessionObject);
    // let orgId = parsedObject.orgId;
    // let url = `${config.BASE_URL}/${orgId}/user/${parsedObject.userId}`;
    // let HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    // return this.http.get(`${url}`)
  }

  awsResolveToken(token): Observable<any> {
    let url = `${config.BASE_URL}/aws/resolvecustomer/${token}`;
    let HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    return this.http.get(`${url}`);
  }

  getAWSUsersLoggedIn(sessionObject): Observable<any> {
    let parsedObject = JSON.parse(sessionObject);
    let sessionCode = parsedObject.code;
    let awsCognitoOrgId = localStorage.getItem('awsCognitoOrgId')
    let url = `${config.AWS_LOGIN_BASE_URI}OAuthAws/${sessionCode}/${awsCognitoOrgId}`;
    let HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    return this.http.get(`${url}`)
  }

  addUser(payload) {
    let url = "";

    if (this.storageService.getPlatform().isAWS) {
      url = `${config.AWS_LOGIN_BASE_URI}/api/v1/aws/user/add`;
    }
    else {
      url = `${config.GCP_LOGIN_BASE_URI}/api/v1/gcp/user/add`;
    }
    return this.http.post(`${url}`, payload)
  }

  login(): Observable<boolean> {
    return of(true).pipe(tap(val => this.isLoggedIn = true));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}