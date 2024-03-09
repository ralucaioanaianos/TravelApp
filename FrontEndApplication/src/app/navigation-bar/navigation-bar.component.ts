import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  standalone: true,
  imports: [
    MatToolbar
  ],
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  name = 'Vacation Manager';

  constructor(private router: Router) {}

  showAlert(item: string) {
    alert("you clicked on " + item);
  }

  navigateToFriendsPage() {
    this.router.navigate(['/friends']);
  }

  navigateToVacationsPage() {
    this.router.navigate(['/vacations']);
  }
}
