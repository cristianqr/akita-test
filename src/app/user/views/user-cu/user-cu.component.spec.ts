import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCuComponent } from './user-cu.component';

describe('UserCuComponent', () => {
    let component: UserCuComponent;
    let fixture: ComponentFixture<UserCuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCuComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
