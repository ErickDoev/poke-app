import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsBarsComponent } from './statistics-bars.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [StatisticsBarsComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [StatisticsBarsComponent]
})
export class StatisticsBarsModule { }
