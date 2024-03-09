import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-friend-details',
  standalone: true,
  imports: [
    NavigationBarComponent
  ],
  templateUrl: './friend-details.component.html',
  styleUrl: './friend-details.component.css'
})
export class FriendDetailsComponent {
  friendName: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.friendName = this.route.snapshot.params['name'];
  }
}
