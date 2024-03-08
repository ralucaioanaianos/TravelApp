import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router, private authService: AuthService) { }

  login(email: string) {
    this.authService.login(email);
    this.router.navigate(['/main']);
  }

  register() {
    alert("Register pressed");
  }
}
