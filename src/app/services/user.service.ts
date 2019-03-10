import { Injectable } from '@angular/core';
import { User } from '../models/User';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: Observable<any>;
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'kev@gmail.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'kev@gmail.com',
        registered: new Date('01/12/2019 08:30:00'),
        hide: true
      }, {
        firstName: 'Kevin',
        lastName: 'Smith',
        email: 'kev@gmail.com',
        registered: new Date('01/02/2015 08:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => observer.next(1), 1000);

      setTimeout(() => observer.next(2), 1000);

      setTimeout(() => observer.next(3), 1000);

      setTimeout(() => observer.next(4), 1000);
    });
    return this.data;
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
