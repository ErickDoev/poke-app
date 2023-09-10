import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pokemons',
    loadChildren: () => 
      import('./features/pokemon/pokemon.module').then(
        (m) => m.PokemonModule
      )
  },
  {
    path:'about-me',
    loadChildren: () => 
      import('./features/about/about.module').then(
        (m) => m.AboutModule
      )
  },
  {
    path: '**',
    redirectTo: 'pokemons'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
