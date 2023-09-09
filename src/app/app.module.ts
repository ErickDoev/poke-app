import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { pokemonReducer } from './store/reducers/pokemon/get-pokemon.reducer';
import { pokemonListReducer } from './store/reducers/pokemon/get-pokemon-list.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { pokemonSpecie } from './store/reducers/pokemon/get-specie.reducer';
import { allPokemonReducer } from './store/reducers/pokemon/get-all-pokemons.reducer';
import { FiltroPipe } from './pipes/filtro.pipe';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ pokemon: pokemonReducer, pokemonList: pokemonListReducer, specie: pokemonSpecie, allPokemonList: allPokemonReducer}), 
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot( EffectsArray ),
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
