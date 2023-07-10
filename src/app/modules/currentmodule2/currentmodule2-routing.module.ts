import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Currentmodule2Component } from 'src/app/components/currentmodule2/currentmodule2.component';

const routes: Routes = [
  { path: '', component: Currentmodule2Component },
  {path:'currentmodule2component',component:Currentmodule2Component}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Currentmodule2RoutingModule { }
