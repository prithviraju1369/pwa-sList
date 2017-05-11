import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
    selector: 'list',
    styleUrls:['./list.component.scss'],
    templateUrl: './list.component.html',
})
export class ListComponent{
    items: FirebaseListObservable<any[]>;
    constructor(db: AngularFireDatabase) {
        this.items = db.list('/sList');
        console.log(this.items);
    }
    
};