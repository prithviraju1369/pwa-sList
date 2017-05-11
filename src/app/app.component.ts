import { Component ,ElementRef,AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app works!';
  navLinks=[
    {label: 'Home', link: 'home'},
    {label: 'Help', link: 'help'}
  ];
  constructor(private el: ElementRef) {
  }
  ngAfterViewInit(){
    this.el.nativeElement.querySelector('#mainContainer').style.height=(window.innerHeight-113)+'px';
  }
}
