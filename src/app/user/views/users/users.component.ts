import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services';
import { Observable } from 'rxjs';
import { User } from '@app/shared/models';
import { UsersQuery } from '@app/state/queries';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users$: Observable<User[]>;
    userSearcherForm: FormGroup;
    constructor(
        private userDataService: UserDataService,
        private usersQuery: UsersQuery,
        private router: Router,
        private fb: FormBuilder,
    ) {}

    ngOnInit() {
        this.makeForm();
        this.users$ = this.usersQuery.selectAll();
        this.loadFilter();
    }

    private makeForm() {
        this.userSearcherForm = this.fb.group({
            firstName: [''],
            firstSurname: [''],
            lastSurname: [''],
        });
    }

    private loadFilter() {
        this.userSearcherForm.patchValue(this.usersQuery.getValue().ui.searcher);
    }

    public searchUser() {
        this.userDataService.getUsers(this.userSearcherForm.value).subscribe();
    }

    public newUser() {
        this.router.navigate(['/users/new']);
    }

    public editUser(user: User) {
        this.userDataService.setActiveUSer(user.id);
        this.router.navigate([`/users/edit/${user.id}`]);
    }

    public deleteUser(user: User) {
        this.userDataService.deleteUser(user.id).subscribe();
    }
}
