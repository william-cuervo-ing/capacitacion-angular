import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './model/user';
import {SelectedUserComponent} from './selected-user/selected-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild("selectedUserComponent") selectedUserComponent: SelectedUserComponent

  constructor(
    public usersService: UsersService
  ) {
  }

  ngOnInit(): void {
  }

  selectUser(user: User): void {
    console.log('user UsersComponent', user)
    this.selectedUserComponent.setUsuario(user);
  }

}
