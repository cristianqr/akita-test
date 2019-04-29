import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersStore } from '@app/state/stores';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '@app/shared/models';

@Injectable()
export class UserDataService {
    constructor(private http: HttpClient, private usersStore: UsersStore) {}

    getUsers(): Observable<any> {
        return this.http.get<User[]>('http://localhost:3000/users').pipe(
            map(res => {
                this.usersStore.set(res);
            }),
        );
    }

    getUserById(userId: any): Observable<any> {
        return this.http.get<User>(`http://localhost:3000/users/${userId}`);
    }

    saveUser(user: User): Observable<any> {
        return this.http.post<User>('http://localhost:3000/users', user);
    }

    updateUser(user: User): Observable<any> {
        return this.http.put<User>('http://localhost:3000/users', user);
    }

    deleteUser(userId: any): Observable<any> {
        return this.http.delete<User>(`http://localhost:3000/users/${userId}`);
    }
}
