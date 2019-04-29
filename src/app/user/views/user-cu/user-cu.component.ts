import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '@app/user/services';

@Component({
    selector: 'app-user-cu',
    templateUrl: './user-cu.component.html',
    styleUrls: ['./user-cu.component.scss'],
})
export class UserCuComponent implements OnInit {
    userForm: FormGroup;
    userId: Number;
    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private userDataService: UserDataService) {}

    ngOnInit() {
        this.makeForm();
        this.userId = this.route.snapshot.params['userId'];
    }

    public saveUser() {
        if (!this.userId) {
            this.userDataService.saveUser(this.userForm.value).subscribe(res => {
                this.router.navigate(['/users']);
            });
        } else {
            this.userDataService.updateUser(this.userForm.value).subscribe(res => {
                this.router.navigate(['/users']);
            });
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
