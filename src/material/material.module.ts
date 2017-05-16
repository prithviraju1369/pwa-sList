import { NgModule } from '@angular/core';
import {MdButtonModule, 
  MdCheckboxModule,
  MdToolbarModule,
  MdTabsModule,
  MdInputModule
} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,MdCheckboxModule,MdToolbarModule,MdTabsModule,
    MdInputModule

  ],
  exports: [
    MdButtonModule,MdCheckboxModule,MdToolbarModule,MdTabsModule,
    MdInputModule
  ],
  providers: [],
})
export class MaterialModule { }
