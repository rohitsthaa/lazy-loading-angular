import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadMeComponent} from '../load-me/load-me.component';

const routes: Routes = [
  {
    path: '',
    component: LoadMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
