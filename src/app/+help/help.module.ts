import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HelpComponent }   from './help.component';

const routes: Routes = [
  { path: '', component: HelpComponent },
];

// index module bootstrapping
@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [HelpComponent]
})
export class HelpModule { }