import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';


const routes: Routes = [
 { path: '', redirectTo: '/index', pathMatch: 'full' },
 { path: 'home', loadChildren: './+home/home.module#HomeModule' },
 { path: 'list', loadChildren: './+list/list.module#ListModule' },
 { path: 'help', loadChildren: './+help/help.module#HelpModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
