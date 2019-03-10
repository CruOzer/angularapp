import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    user: User;
    constructor() {

    }

    ngOnInit() {
        this.user = {
            firstName: 'Kevin',
            lastName: 'Smith',
            email: 'kev@gmail.com',
            registered: new Date('01/02/2015 08:30:00'),
            hide: true
        }
    }
}


