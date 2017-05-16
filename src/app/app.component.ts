import { Component,Renderer,ViewChild,ElementRef,AfterViewInit,HostListener} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app works!';
  navLinks=[
    {label: 'Home', link: 'home'},
    {label: 'Create', link: 'create'},
    {label: 'List', link: 'list'},
    {label: 'Help', link: 'help'}
  ];
  globalListenFunc: Function;


  @HostListener('window:resize', ['$event'])  onResize(event) {
    this.setScroll();
  }



  constructor(private el: ElementRef,private renderer: Renderer) {
    let self=this;
    let navEle;
    var source$ = Observable.fromEvent(window, 'scroll').debounceTime(100);
    source$.subscribe((x:any)=>{
      navEle=self.el.nativeElement.getElementsByTagName('nav');
       if(window.scrollY >64){
          if(navEle && navEle.length>0){
            navEle[0].classList.add('fixed');
          }
       }else{
         if(navEle && navEle.length>0){
            navEle[0].classList.remove('fixed');
         }
       }
    });
  }
  ngAfterViewInit(){
    this.setScroll()
  }

  setScroll(){
    let toolBar=this.el.nativeElement.querySelector('md-toolbar').style.height;
    let navBar=this.el.nativeElement.querySelector('nav').style.height;
    this.el.nativeElement.querySelector('#mainContainer').style.height=(window.innerHeight-112)+'px';
  }
}
