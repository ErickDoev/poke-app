import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { GetPokemonListFacade } from 'src/app/store/facades/pokemon/get-pokemon-list.facade';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemons$ = this.pokemonListFacade.entities$;
  pokemons: Pokemon[] | undefined;
  next: string | undefined = '';
  prev: string | undefined= '';
  pokeListSubscription$: Subscription | undefined;

  constructor(
    private pokemonListFacade: GetPokemonListFacade
  ) { }

  ngOnInit(): void {
    this.pokemonListFacade.fetch('');
    this.pokemonListFacade.entities$.subscribe(ents => {
      this.prev = ents?.previous;
      this.next = ents?.next;
    })
    this.pokemons$.subscribe(ents => {
      this.pokemons = ents?.pokemon;
    })
  }

  onNext(){
    this.pokemonListFacade.fetch(this.next);
  }

  onPrev(){
    this.pokemonListFacade.fetch(this.prev);
  }
  ngOnDestroy(): void {
    this.pokeListSubscription$?.unsubscribe();
  }

}
