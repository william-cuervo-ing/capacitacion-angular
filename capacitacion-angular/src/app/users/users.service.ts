import {Injectable} from '@angular/core';
import {User} from './model/user';

@Injectable({providedIn: 'root'})
export class UsersService {

  users: User[] = [];

  constructor() {
    this.users.push(new User('william@gmail.com', 'William CUervo', 180, 'Tunja'));
    this.users.push(new User('yesid@gmail.com', 'Yesid CUervo', 180, 'Tunja'));
    this.users.push(new User('omaira@gmail.com', 'Omairaaaaaaaaaaaaa', 280, 'Tunja'));
  }

}
