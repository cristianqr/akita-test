import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as formViews from './views';
import * as fromGuards from './guards';

const routes: Routes = [
    {
        path: '',
        component: formViews.UsersComponent,
    },
    {
        path: 'new',
        component: formViews.UserCuComponent,
    },
    {
        path: 'edit/:userId',
        component: formViews.UserCuComponent,
        canActivate: [fromGuards.UsersGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
