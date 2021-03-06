import { Component ,AfterViewInit, ElementRef} from '@angular/core';

import {create} from './../modal/create';

@Component({
    selector: 'create',
    styleUrls:['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class CreateComponent implements AfterViewInit{
    private users=[];
    public sList:create={};
    constructor(private el: ElementRef) {
        this.sList.users=[];
    }

    ngAfterViewInit(){
        debugger
        let loadEle = this.el.nativeElement.parentNode.parentNode.querySelector('#loadContainer');
        let contentEle=this.el.nativeElement.parentNode;
        if(contentEle.classList && contentEle.classList.length>0)
        contentEle.classList.remove('container-loading');
        loadEle.classList.add('container-loading');
        
    }

    addUsers(){
        let obj={};
        this.sList.users.push(obj);
        console.log(this.sList.users);
    }
    onDelete(i){
        this.sList.users.splice(i, 1);
    }
    create(){
        
    }
    
};