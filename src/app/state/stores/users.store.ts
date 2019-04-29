import { StoreConfig, Store, EntityState, EntityStore } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { User } from '@app/shared/models';

export interface UsersState extends EntityState<User> {
    ui: {
        searcher: {
            firstName?: string;
            fistSurname?: string;
            lastSurname?: string;
        };
    };
}

const initialState = {
    ui: {
        searcher: {},
    },
};

@StoreConfig({ name: 'users' })
@Injectable({ providedIn: 'root' })
export class UsersStore extends EntityStore<UsersState, User> {
    constructor() {
        super(initialState);
    }
}
