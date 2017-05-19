import { Component ,AfterViewInit, ElementRef} from '@angular/core';
@Component({
    selector: 'home',
    styleUrls:['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit{

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit(){
        debugger
        let loadEle = this.el.nativeElement.parentNode.querySelector('#loadContainer');
        loadEle.classList.add('container-loading');
        
    }
    
}