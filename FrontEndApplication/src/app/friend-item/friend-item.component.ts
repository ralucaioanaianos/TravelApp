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
}
