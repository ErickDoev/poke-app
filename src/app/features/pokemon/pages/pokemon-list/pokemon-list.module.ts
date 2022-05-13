import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../components/card/card.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { InputSearchModule } from '../../components/input-search/input-search.module';

const routes: Routes = [ 
  {
    path:'',
    component: PokemonListComponent
  }
]

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    MatGridListModule,
    MatButtonModule,
    InputSearchModule
  ], 
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
