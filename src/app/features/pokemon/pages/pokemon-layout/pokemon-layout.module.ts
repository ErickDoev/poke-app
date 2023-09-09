import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonLayoutComponent } from './pokemon-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PokemonLayoutComponent]
})
export class PokemonLayoutModule { }
