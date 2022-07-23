import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  saveUser(): void {
    const name = this.formGroup.get('name')?.value;
    const email = this.formGroup.get('email')?.value;
    const password = this.formGroup.get('password')?.value;
    const user: User = new User(name, email, password);
    this.usersService.createUser(user).subscribe((response) => {
      console.log('Server response', response);
    });
  }
}
