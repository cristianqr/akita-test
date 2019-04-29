import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import * as fromViews from './views';
import * as fromServices from './services';
import * as fromGuards from './guards';

@NgModule({
    declarations: [...fromViews.views],
    imports: [CommonModule, ReactiveFormsModule, UserRoutingModule],
    providers: [...fromServices.services, ...fromGuards.guards],
})
export class UserModule {}
