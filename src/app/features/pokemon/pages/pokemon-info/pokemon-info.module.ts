import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonInfoComponent } from './pokemon-info.component';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsBarsModule } from '../../components/statistics-bars/statistics-bars.module'
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [ 
  {
    path:'',
    component: PokemonInfoComponent
  }
]

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StatisticsBarsModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ], 
  exports:[PokemonInfoComponent]
})
export class PokemonInfoModule { }
