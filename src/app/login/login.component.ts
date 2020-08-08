import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../common/services/api/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  validUsers = [
    { id: 1, username: 'suzhi', password: 'suzhi' },
    { id: 2, username: 'adhavan', password: 'adhavan' },
    { id: 3, username: 'divakar', password: 'divakar' },
    { id: 4, username: 'jagadeesh', password: 'jagadeesh' }
  ];

  constructor(private router: Router, private formBuilder: FormBuilder, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.getValue('sessionDetails') != null) {
      this.router.navigate(['/home'])
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // Validation Failed
    if (this.loginForm.invalid) {

      return;
    }

    var isSuccessful = this.authenticate(this.loginForm.get('username').value, this.loginForm.get('password').value);
    if (isSuccessful) {
      let user = { "username": this.loginForm.get('username').value };
      this.storageService.setValue("sessionDetails", user);
      this.router.navigate(['/home']);
    }
  }

  authenticate(name: String, password: String): boolean {
    var user = this.validUsers.filter((user) => {
      return user.username == name && user.password == password;
    })
    return user.length > 0 ? true : false;
  }
}
