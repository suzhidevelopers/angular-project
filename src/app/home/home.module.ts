import { NgModule, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MenuListItemComponent } from "./menu-list-item/menu-list-item.component";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
import { FourthComponent } from "./fourth/fourth.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { HomeComponent } from './home.component';
import { NavService } from "./nav.service";

import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    MenuListItemComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    TopNavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [NavService]
})
export class HomeModule {

  

}