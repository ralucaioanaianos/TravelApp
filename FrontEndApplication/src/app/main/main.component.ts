import {Component, OnInit} from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavigationBarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  loggedInUser: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
}
