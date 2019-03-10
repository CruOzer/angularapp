import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  data: any;
  users: User[];
  showExtended: boolean = true;
  showUserForm: boolean = false;
  loaded: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(private dataService: UserService) {

  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);

    });
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.hide = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
      return;
    }
    value.isActive = true;
    value.registered = new Date();
    value.hide = true;
    this.dataService.addUser(value);

    this.form.reset();
  }
}
