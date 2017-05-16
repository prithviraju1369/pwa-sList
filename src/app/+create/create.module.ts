import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './create.component';
import { AddUserComponent } from './adduser.component';

import {MaterialModule} from './../../material/material.module';


const routes: Routes = [
  { path: '', component: CreateComponent },
];

// index module bootstrapping
@NgModule({
    imports: [RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    CommonModule],
    declarations: [AddUserComponent,CreateComponent]
})
export class CreateModule { }