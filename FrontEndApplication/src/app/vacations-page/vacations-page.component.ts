import { Component } from '@angular/core';
import {VacationItemComponent} from "../vacation-item/vacation-item.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-vacations-page',
  standalone: true,
  imports: [
    VacationItemComponent,
    NavigationBarComponent,
    NgForOf
  ],
  templateUrl: './vacations-page.component.html',
  styleUrl: './vacations-page.component.css'
})
export class VacationsPageComponent {
  vacations = [
    {
      name: 'Rome',
      photo: 'assets/roma.webp',
      startDate: new Date('2024-04-14'),
      endDate: new Date('2024-04-17'),
    },
    {
      name: 'Santorini',
      photo: 'assets/greece.jpeg',
      startDate: new Date('2024-05-14'),
      endDate: new Date('2024-06-17'),
    },
    {
      name: 'Cairo',
      photo: 'assets/egipt.jpg',
      startDate: new Date('2025-04-14'),
      endDate: new Date('2025-04-17'),
    },
  ];
  constructor() { }
}
