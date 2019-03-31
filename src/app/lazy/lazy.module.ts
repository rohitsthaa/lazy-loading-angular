import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LoadMeComponent } from '../load-me/load-me.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LoadMeComponent]
})
export class LazyModule { }
