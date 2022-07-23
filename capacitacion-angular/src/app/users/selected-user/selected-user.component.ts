import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  selectedUser: User;

  constructor() {
  }

  ngOnInit(): void {
  }

  setUsuario(selectedUser: User): void {
    this.selectedUser = selectedUser;
    console.log('SelectedUserComponent', this.selectedUser)
  }

}
