import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLayoutComponent } from './pages/pokemon-layout/pokemon-layout.component';
import { PokemonLayoutModule } from './pages/pokemon-layout/pokemon-layout.module';

const routes: Routes = [
  {
    path: '',
    component: PokemonLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => 
          import('./pages/pokemon-list/pokemon-list.module').then(
            (m) => m.PokemonListModule
          )
      },
      {
        path: ':id',
        pathMatch: 'full',
        loadChildren: () => 
          import('./pages/pokemon-info/pokemon-info.module').then(
            (m) => m.PokemonInfoModule
          )
      },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PokemonLayoutModule
  ]
})
export class PokemonRoutingModule { }
