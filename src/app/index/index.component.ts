import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'index',
    template: '',
})
export class IndexComponent implements OnInit {
    db: any;
    // redirect to home page
    constructor(private router: Router) {

    }

    ngOnInit() {
        this.router.navigate(['home']);
    }

};