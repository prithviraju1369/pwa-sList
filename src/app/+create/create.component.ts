import { Component } from '@angular/core';

import {create} from './../modal/create';

@Component({
    selector: 'create',
    styleUrls:['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class CreateComponent{
    private users=[];
    public sList:create={};
    constructor() {
        this.sList.users=[];
    }
    addUsers(){
        let obj={};
        this.sList.users.push(obj);
        console.log(this.sList.users);
    }
    onDelete(i){
        this.sList.users.splice(i, 1);
    }
    
};