import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/AuthService";
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private router: Router, private userService: UserService) { }

  register(firstName: string, lastName: string, email: string, password: string) {
    console.log("registering")
    const user: User = new User('0', firstName, lastName, email, password, 'miau', );
    this.userService.addUser(user);
  }
}
