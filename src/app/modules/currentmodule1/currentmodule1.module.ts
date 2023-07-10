import { NgModule } from '@angular/core';

import { Currentmodule1RoutingModule } from './currentmodule1-routing.module';
import { Currentmodule1Component } from 'src/app/components/currentmodule1/currentmodule1.component';
import { MatOptionModule } from '@angular/material/core';
import { MattoggleModule } from '../mattoggle/mattoggle.module';


@NgModule({
  declarations: [
    Currentmodule1Component
  ],
  imports: [
    Currentmodule1RoutingModule,
    MattoggleModule
  ]
})
export class Currentmodule1Module { }
