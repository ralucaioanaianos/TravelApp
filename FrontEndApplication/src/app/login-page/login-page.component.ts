import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router) { }

  login() {
    // Perform login logic here

    // After successful login, navigate to the main component
    this.router.navigate(['/main']);
  }

  register() {
    alert("Register pressed");
  }
}
