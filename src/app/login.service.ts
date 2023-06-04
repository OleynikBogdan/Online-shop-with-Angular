import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService {
  email = 'profenyx@gmail.com';
  password = '1a86n32y';
  errors$: BehaviorSubject<string> = new BehaviorSubject('');
  login(email: string, password: string): Observable <boolean> {
    if (email === this.email && password === this.password) {
     this.errors$.next('');
     return of(true);
    }
    this.errors$.next('Email or Password incorrect!');
    return of(false);
  }
  getError(): BehaviorSubject<string> {
    return this.errors$;
  }

}
