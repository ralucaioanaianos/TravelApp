import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndApplication';
}
