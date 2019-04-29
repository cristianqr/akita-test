import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services';
import { Observable } from 'rxjs';
import { User } from '@app/shared/models';
import { UsersQuery } from '@app/state/queries';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users$: Observable<User[]>;
    constructor(private userDataService: UserDataService, private usersQuery: UsersQuery) {}

    ngOnInit() {
        this.userDataService.getUsers().subscribe();

        this.users$ = this.usersQuery.selectAll();
    }
}
