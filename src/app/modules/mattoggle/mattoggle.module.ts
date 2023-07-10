import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MattoggleRoutingModule } from './mattoggle-routing.module';
import { MattoggleComponent } from 'src/app/components/mattoggle/mattoggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    MattoggleComponent
  ],
  imports: [
    CommonModule,
    MattoggleRoutingModule,
    MatSlideToggleModule
  ],
  exports:[
    MatSlideToggleModule,
    MattoggleComponent
  ]
})
export class MattoggleModule { }
