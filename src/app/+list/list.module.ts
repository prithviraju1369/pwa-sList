import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './../config/firebase-config';

import { ListComponent }   from './list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
];

// index module bootstrapping
@NgModule({
    imports: [RouterModule.forChild(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,CommonModule],
    
    declarations: [ListComponent]
})
export class ListModule { }