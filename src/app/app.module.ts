import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";

import { LoginComponent } from './login/login.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { BackendService } from "./backend.service";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
