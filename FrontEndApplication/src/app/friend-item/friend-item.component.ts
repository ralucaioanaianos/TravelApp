import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-friend-item',
  standalone: true,
  imports: [],
  templateUrl: './friend-item.component.html',
  styleUrl: './friend-item.component.css'
})
export class FriendItemComponent {
  @Input() user: { name: string; photoUrl: string; } | undefined;

  removeFriend() {
    // Display alert when Remove Friend button is clicked
    alert(`Removing ${this.user?.name} from your friends list.`);
  }
}
