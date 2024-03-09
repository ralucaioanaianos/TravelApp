import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {FriendItemComponent} from "../friend-item/friend-item.component";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friends-page',
  standalone: true,
  imports: [
    NavigationBarComponent,
    FriendItemComponent,
    NgForOf
  ],
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.css'
})
export class FriendsPageComponent {
  friends = [
    { name: 'Ion Popescu', photoUrl: 'assets/beach_bakground.jpg' },
    { name: 'Pisi Miau', photoUrl: 'assets/beach_bakground.jpg' },
    { name: 'Catelul Toto', photoUrl: 'assets/beach_bakground.jpg' }
  ];

  constructor(private router: Router) {}

  viewFriendDetails(friendName: string) {
    this.router.navigate(['/friend-details', friendName]);
  }
}
