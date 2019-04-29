import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get('http://localhost:3000/users');
    }
}