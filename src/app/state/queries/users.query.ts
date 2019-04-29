import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { UsersStore, UsersState } from '../stores';
import { User } from '@app/shared/models';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState, User> {
    constructor(private usersStore: UsersStore) {
        super(usersStore);
    }
}
