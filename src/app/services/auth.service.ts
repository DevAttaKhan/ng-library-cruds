import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;

  login(values: any) {
    if (values.password === 'admin') {
      return (this.isAuthenticated = true);
    } else return false;
  }
}
