import { NgModule } from '@angular/core';

import { Currentmodule2RoutingModule } from './currentmodule2-routing.module';
import { Currentmodule2Component } from 'src/app/components/currentmodule2/currentmodule2.component';
import { MattoggleModule } from '../mattoggle/mattoggle.module';


@NgModule({
  declarations: [
    Currentmodule2Component
  ],
  imports: [
    Currentmodule2RoutingModule,
    MattoggleModule,
    
  ]
})
export class Currentmodule2Module { }
