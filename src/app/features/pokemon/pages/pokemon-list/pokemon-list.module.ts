import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../components/card/card.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { HeaderModule } from 'src/app/features/ui-components/header/header.module';
import { MatIconModule } from '@angular/material/icon';

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
    HeaderModule,
    MatIconModule
  ], 
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
