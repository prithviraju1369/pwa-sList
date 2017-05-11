import { Component ,ElementRef,AfterViewInit,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app works!';
  navLinks=[
    {label: 'Home', link: 'home'},
    {label: 'List', link: 'list'},
    {label: 'Help', link: 'help'}
  ];

  @HostListener('window:resize', ['$event'])  onResize(event) {
    this.setScroll();
  }

  constructor(private el: ElementRef) {
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
