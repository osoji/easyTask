import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//Give me random number between zero(0) and the heighest available number in DUMMY_USERS
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]
}
