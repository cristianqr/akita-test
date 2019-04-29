import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '@app/user/services';
import { UsersQuery } from '@app/state/queries';
import { User } from '@app/shared/models';
import { ID } from '@datorama/akita';

@Component({
    selector: 'app-user-cu',
    templateUrl: './user-cu.component.html',
    styleUrls: ['./user-cu.component.scss'],
})
export class UserCuComponent implements OnInit {
    userForm: FormGroup;
    userId: ID;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private userDataService: UserDataService,
        private usersQuery: UsersQuery,
    ) {}

    ngOnInit() {
        this.makeForm();
        this.loadUser();
    }

    public saveUser() {
        if (!this.userId) {
            this.userDataService.saveUser(this.userForm.value).subscribe(res => {
                this.router.navigate(['/users']);
            });
        } else {
            const sendData: User = this.userForm.value;
            sendData.id = this.userId;
            this.userDataService.updateUser(sendData).subscribe(res => {
                this.router.navigate(['/users']);
            });
        }
    }

    private loadUser() {
        this.userId = this.route.snapshot.params['userId'];
        if (this.userId) {
            this.userForm.patchValue(this.usersQuery.getActive());
        }
    }

    public cancel() {
        this.router.navigate(['/users']);
    }

    private makeForm() {
        this.userForm = this.fb.group({
            firstName: [''],
            firstSurname: [''],
            lastSurname: [''],
        });
    }
}
