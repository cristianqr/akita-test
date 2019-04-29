import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services';
import { Observable } from 'rxjs';
import { User } from '@app/shared/models';
import { UsersQuery } from '@app/state/queries';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users$: Observable<User[]>;
    constructor(private userDataService: UserDataService, private usersQuery: UsersQuery, private router: Router) {}

    ngOnInit() {
        this.userDataService.getUsers().subscribe();

        this.users$ = this.usersQuery.selectAll();
    }

    public newUser() {
        this.router.navigate(['/users/new']);
    }

    public editUser(user: User) {
        this.router.navigate([`/users/edit/${user.id}`]);
    }

    public deleteUser(user: User) {
        this.userDataService.deleteUser(user.id);
    }
}
