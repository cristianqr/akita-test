import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersStore } from '@app/state/stores';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '@app/shared/models';
import { ID } from '@datorama/akita';
import { UsersQuery } from '@app/state/queries';

@Injectable()
export class UserDataService {
    constructor(private http: HttpClient, private usersStore: UsersStore, private usersQuery: UsersQuery) {}

    getUsers(userFilter: User): Observable<any> {
        this.usersStore.update({ ui: { searcher: userFilter } });
        return this.http.get<User[]>('http://localhost:3000/users').pipe(
            map(res => {
                this.usersStore.set(res);
            }),
        );
    }

    getUserById(userId: any): Observable<any> {
        return this.http.get<User>(`http://localhost:3000/users/${userId}`).pipe(
            map(res => {
                if (!this.usersQuery.getActive()) {
                    this.usersStore.add([res]);
                }
            }),
        );
    }

    saveUser(user: User): Observable<any> {
        return this.http.post<User>('http://localhost:3000/users', user).pipe(
            map(res => {
                this.usersStore.add([res]);
            }),
        );
    }

    updateUser(user: User): Observable<any> {
        return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user).pipe(
            map(res => {
                this.usersStore.updateActive(res);
            }),
        );
    }

    deleteUser(userId: any): Observable<any> {
        return this.http.delete<User>(`http://localhost:3000/users/${userId}`).pipe(
            map(res => {
                this.usersStore.remove(userId);
            }),
        );
    }

    setActiveUSer(userId: ID) {
        this.usersStore.setActive(userId);
    }
}
