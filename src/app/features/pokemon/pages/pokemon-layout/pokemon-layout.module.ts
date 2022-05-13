import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonLayoutComponent } from './pokemon-layout.component';
import { HeaderModule } from 'src/app/features/ui-components/header/header.module';


@NgModule({
  declarations: [PokemonLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [PokemonLayoutComponent]
})
export class PokemonLayoutModule { }
