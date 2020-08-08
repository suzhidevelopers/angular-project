import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { StorageService } from 'src/app/common/services/api/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public navService: NavService, public storageService: StorageService, private router: Router) { }
  logOut(event) {
    this.storageService.resetSession();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}