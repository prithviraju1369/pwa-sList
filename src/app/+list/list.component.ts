import { Component ,AfterViewInit, ElementRef} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
    selector: 'list',
    styleUrls:['./list.component.scss'],
    templateUrl: './list.component.html',
})
export class ListComponent implements AfterViewInit{
    items: FirebaseListObservable<any[]>;
    constructor(db: AngularFireDatabase,private el: ElementRef) {
        this.items = db.list('/sList');
        console.log(this.items);
    }

    ngAfterViewInit(){
        let loadEle = this.el.nativeElement.parentNode.querySelector('#loadContainer');
        loadEle.classList.add('container-loading');
    }
    
};