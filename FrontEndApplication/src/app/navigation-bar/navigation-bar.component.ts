import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";



@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    NgOptimizedImage,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  name = 'Vacation Manager';

  constructor() {}

  openSidenav() {
    // Implement your openSidenav logic here
  }

  showAlert(item: string) {
    alert("you clicked on " + item);
  }
}
