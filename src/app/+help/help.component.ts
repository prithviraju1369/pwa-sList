import { Component, OnInit,AfterViewInit , ElementRef} from '@angular/core';
@Component({
    selector: 'help',
    templateUrl: './help.component.html',
})
export class HelpComponent implements AfterViewInit {
    constructor(private el: ElementRef){
    }

    ngAfterViewInit(){
        debugger
        let loadEle = this.el.nativeElement.parentNode.querySelector('#loadContainer');
        loadEle.classList.add('container-loading');
        
    }
};