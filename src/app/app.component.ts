import { Component, Renderer, ViewChild, ElementRef, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app works!';
  navLinks = [
    { label: 'Home', link: 'home' },
    { label: 'Create', link: 'create' },
    { label: 'List', link: 'list' },
    { label: 'Help', link: 'help' }
  ];
  globalListenFunc: Function;

  touchStartCoords = { 'x': -1, 'y': -1 }; // X and Y coordinates on mousedown or touchstart events.
  touchEndCoords = { 'x': -1, 'y': -1 };// X and Y coordinates on mouseup or touchend events.
  direction = 'undefined'// Swipe direction
  minDistanceXAxis = 30;// Min distance on mousemove or touchmove on the X axis
  maxDistanceYAxis = 30;// Max distance on mousemove or touchmove on the Y axis
  maxAllowedTime = 100;// Max allowed time between swipeStart and swipeEnd
  startTime = 0;// Time on swipeStart
  elapsedTime = 0;// Elapsed time between swipeStart and swipeEnd
  targetElement;// Element to delegate

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.setScroll();
  }



  constructor(private el: ElementRef, private renderer: Renderer, private route: ActivatedRoute,
    private router: Router) {
    let self = this;
    let navEle;
    let mainContainerEle;
    var source$ = Observable.fromEvent(window, 'scroll');
    source$.subscribe((x: any) => {
      console.log(window.scrollY);
      navEle = self.el.nativeElement.getElementsByTagName('nav');
      mainContainerEle=self.el.nativeElement.querySelector('#mainContainer');
      let ScreenYPos = window.scrollY || window.pageYOffset;
      if ((ScreenYPos) > 70) {
        if (navEle && navEle.length > 0) {
          navEle[0].classList.add('fixed');
          mainContainerEle.classList.add('fixedmargin');
        }
      } else {
        if (navEle && navEle.length > 0) {
          navEle[0].classList.remove('fixed');
          mainContainerEle.classList.remove('fixedmargin');
        }
      }
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return Observable.from([1, 2, 3]).map(x => x);
      }).subscribe(c => console.log(c));
  }

  ngAfterViewInit() {
    this.setScroll();
    this.targetElement = this.el.nativeElement.querySelector('#mainContainer');
    this.addMultipleListeners(this.targetElement, 'mousedown touchstart', this.swipeStart.bind(this));
    this.addMultipleListeners(this.targetElement, 'mousemove touchmove', this.swipeMove.bind(this));
    this.addMultipleListeners(this.targetElement, 'mouseup touchend', this.swipeEnd.bind(this));
  }

  setScroll() {
    let toolBar = this.el.nativeElement.querySelector('md-toolbar').style.height;
    let navBar = this.el.nativeElement.querySelector('nav').style.height;
    this.el.nativeElement.querySelector('#mainContainer').style.height = 'inherit';
  }

  swipeStart(e) {
    let self = this;
    e = e ? e : window.event;
    e = ('changedTouches' in e) ? e.changedTouches[0] : e;
    self.touchStartCoords = { 'x': e.pageX, 'y': e.pageY };
    self.startTime = new Date().getTime();
  }

  swipeMove(e) {
    e = e ? e : window.event;
    // e.preventDefault();
  }

  swipeEnd(e) {
    let self = this;
    e = e ? e : window.event;
    e = ('changedTouches' in e) ? e.changedTouches[0] : e;
    self.touchEndCoords = { 'x': e.pageX - self.touchStartCoords.x, 'y': e.pageY - self.touchStartCoords.y };
    self.elapsedTime = new Date().getTime() - self.startTime;
    if (self.elapsedTime > self.maxAllowedTime) {
      if (Math.abs(self.touchEndCoords.x) >= self.minDistanceXAxis && Math.abs(self.touchEndCoords.y) <= self.maxDistanceYAxis) {
        self.direction = (self.touchEndCoords.x < 0) ? 'left' : 'right';
        switch (self.direction) {
          case 'left':
            self.swipeRight();
            break;
          case 'right':
            self.swipeLeft();
            break;
        }
      }
    }
  }

  swipeRight() {
    let currentUrl = this.router.url.replace("/", "").trim();
    let index = this.findWithAttr("link", currentUrl);
    let currIndex = index;
    if (index >= 0 && this.navLinks.length - 1 > index) {
      index = index + 1;
    }
    let navigateTo = this.navLinks[index].link;
    if (currIndex != index) {
      this.router.navigate([navigateTo]);
      this.el.nativeElement.querySelector('#loadContainer').classList.remove('container-loading');
      this.el.nativeElement.querySelector('#content').classList.add('container-loading');
    }
  }

  swipeLeft() {
    let currentUrl = this.router.url.replace("/", "").trim();
    let index = this.findWithAttr("link", currentUrl);
    let currIndex = index;
    if (index > 0) {
      index = index - 1;
    }
    let navigateTo = this.navLinks[index].link;
    if (currIndex != index) {
      this.router.navigate([navigateTo]);
      this.el.nativeElement.querySelector('#loadContainer').classList.remove('container-loading');
      this.el.nativeElement.querySelector('#content').classList.add('container-loading');
    }
  }

  findWithAttr(attr, value) {
    for (var i = 0; i < this.navLinks.length; i += 1) {
      if (this.navLinks[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  addMultipleListeners(el, s, fn) {
    var evts = s.split(' ');
    for (var i = 0, iLen = evts.length; i < iLen; i++) {
      el.addEventListener(evts[i], fn, false);
    }
  }



}
