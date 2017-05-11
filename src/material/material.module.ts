import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,MdToolbarModule,MdTabsModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,MdCheckboxModule,MdToolbarModule,MdTabsModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,MdCheckboxModule,MdToolbarModule,MdTabsModule
  ],
  providers: [],
})
export class MaterialModule { }
