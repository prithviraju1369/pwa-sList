import { Component,Input,EventEmitter, Output } from '@angular/core';

import {user} from './../modal/create';

@Component({
    selector: 'add-user',
    styleUrls:['./adduser.component.scss'],
    templateUrl: './adduser.component.html'
})
export class AddUserComponent{
    @Input() user: user;
    @Input() index: Number;
    @Output() onDelete = new EventEmitter<Number>();
    constructor() {

    }

    deleteUser() {
        this.onDelete.emit(this.index);
    }

};