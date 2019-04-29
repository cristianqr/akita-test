import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import * as fromViews from './views';

@NgModule({
    declarations: [...fromViews.views],
    imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
