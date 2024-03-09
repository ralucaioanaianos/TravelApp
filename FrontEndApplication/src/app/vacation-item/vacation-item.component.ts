import {Component, Input} from '@angular/core';
import {DatePipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-vacation-item',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    NgClass
  ],
  templateUrl: './vacation-item.component.html',
  styleUrl: './vacation-item.component.css'
})
export class VacationItemComponent {
  @Input() vacation: any;
  hovering: boolean = false;

  constructor() { }

  // Function to handle mouse enter event
  onMouseEnter() {
    this.hovering = true;
  }

  // Function to handle mouse leave event
  onMouseLeave() {
    this.hovering = false;
  }
}
