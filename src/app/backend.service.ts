import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  users =  [
     {  id:  1,  username:  'suzhi', password: 'suzhi' },
     {  id:  2,  username:  'adhavan', email: 'adhavan' },
     {  id:  3,  username:  'divakar', email: 'divakar' },
     {  id:  4,  username:  'jagadeesh', email: 'jagadeesh' }
   ];

   return {users};

  }
}