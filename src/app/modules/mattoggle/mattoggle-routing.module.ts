import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MattoggleComponent } from 'src/app/components/mattoggle/mattoggle.component';

const routes: Routes = [
  { path: '', component: MattoggleComponent },
  {path:'mattogglecomponent',component:MattoggleComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MattoggleRoutingModule { }
