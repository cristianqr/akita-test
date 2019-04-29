import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import * as fromViews from './views';
import * as fromServices from './services';

@NgModule({
    declarations: [...fromViews.views],
    imports: [CommonModule, UserRoutingModule],
    providers: [fromServices.services],
})
export class UserModule {}
