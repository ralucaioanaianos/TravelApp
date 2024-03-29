import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/AuthService";
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  login(email: string) {
    this.authService.login(email);
    console.log("miau")
    this.router.navigate(['/main']);
  }

  register(email: string, password: string) {
    console.log("registering")
    const user: User = new User('0', 'ralu', 'ianos', 'ralucaianos', 'lalala', 'miau', );
    this.userService.addUser(user);
  }
}
