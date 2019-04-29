import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserDataService } from '../services';
import { UsersQuery } from '@app/state/queries';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersGuard implements CanActivate {
    constructor(private usersQuery: UsersQuery, private userDataService: UserDataService) {}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const userId = router.params['userId'];
        if (!this.usersQuery.getActive()) {
            this.userDataService.setActiveUSer(userId);
            return this.userDataService.getUserById(userId).pipe(map(res => true));
        } else {
            return of(true);
        }
    }
}
