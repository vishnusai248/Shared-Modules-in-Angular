import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'mattoggle', loadChildren: () => import('../app/modules/mattoggle/mattoggle.module').then(m => m.MattoggleModule) },
  { path: 'currentmodule1', loadChildren: () => import('../app/modules/currentmodule1/currentmodule1.module').then(m => m.Currentmodule1Module) },
  { path: 'currentmodule2', loadChildren: () => import('../app/modules/currentmodule2/currentmodule2.module').then(m => m.Currentmodule2Module) },
  { path: '', redirectTo: 'mattoggle', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
