import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';
import { DataCardComponent } from './data-card/data-card.component';
import { FilterCardComponent } from './filter-card/filter-card.component';


@NgModule({
  declarations: [
    LaunchesComponent,
    DataCardComponent,
    FilterCardComponent
  ],
  imports: [
    CommonModule,
    LaunchesRoutingModule
  ]
})
export class LaunchesModule { }
