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
        let loadEle = this.el.nativeElement.parentNode.parentNode.querySelector('#loadContainer');
        let contentEle=this.el.nativeElement.parentNode;
        if(contentEle.classList && contentEle.classList.length>0)
        contentEle.classList.remove('container-loading');
        loadEle.classList.add('container-loading');
        
    }
};