import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, AuthGuard } from '../common/services/api';
import { StorageService } from '../common/services/api/storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StorageService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
