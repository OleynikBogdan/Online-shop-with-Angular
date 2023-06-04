import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error$ = this.loginService.getError();
  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  }
  ngOnInit(): void {
  }
  checkUser(email: string, password: string): void {
    this.loginService.login(email, password).pipe(take(1)).subscribe((success) => {
    if (success) {
      this.router.navigate(['product-list']);
    }
    });
  }
  submitForm() {
    if (this.loginForm.valid) {
      console.log('login is successfull');
    } else {
      console.log('error');
    }
  }
}
