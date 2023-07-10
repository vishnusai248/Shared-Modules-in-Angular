import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Currentmodule1Component } from 'src/app/components/currentmodule1/currentmodule1.component';

const routes: Routes = [
  { path: '', component: Currentmodule1Component },
  { path: 'currentmodule1component', component: Currentmodule1Component }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Currentmodule1RoutingModule { }
