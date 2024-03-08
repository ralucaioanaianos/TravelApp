import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: string | undefined;

  constructor() { }

  login(email: string) {
    // Basic login, no verification
    this.loggedInUser = email;
  }

  getLoggedInUser(): string {
    return <string>this.loggedInUser;
  }
}
