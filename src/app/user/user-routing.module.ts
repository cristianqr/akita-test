import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as formViews from './views';

const routes: Routes = [
    {
        path: '',
        component: formViews.UsersComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
