import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonUtilInfo, Specie } from 'src/app/models/pokemon.model';
import { GetPokemonsFacade } from 'src/app/store/facades/pokemon/get-pokemon.facace';
import { GetSpecieFacade } from 'src/app/store/facades/pokemon/get-specie.facade';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit, OnDestroy {

  id: string | null = '';
  color: string | undefined;
  text: string | undefined;

  pokemon!: PokemonUtilInfo | null;
  isLoading$ = this.pokemonFacade.isLoading$;
  error$ = this.pokemonFacade.error$;
  pokemonSubscription$: Subscription | undefined;

  specie!: Specie | null;
  specieSubscription$: Subscription | undefined;

  constructor(
    private pokemonFacade: GetPokemonsFacade,
    private specieFacade: GetSpecieFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.id = params['id'];
        this.searchPokemon(params['id']);
      }
    });
  }

  onBack(){
    this.router.navigateByUrl('pokemons')
  }

  onNextPokemon(): void{
    const id = Number(this.id) + 1;
    this.router.navigate(['pokemons', id]);
  }

  onPrevPokemon(): void{
    const id = Number(this.id) - 1;
    if(id >= 1){
      this.router.navigate(['pokemons', id]);
    }
  }

  searchPokemon(id: string): void {
    this.pokemonFacade.fetch(Number(id));    

    this.pokemonSubscription$ = this.pokemonFacade.entity$.subscribe(poke => {
      this.pokemon = poke;
    });

    this.specieFacade.fetch(Number(id));

    this.specieSubscription$ = this.specieFacade.entity$.subscribe(ent => {
      this.specie = ent;
      this.color = ent?.color.name;
      this.text = ent?.flavor_text_entries[0].flavor_text;
    }); 
  }

  ngOnDestroy(): void {
    this.pokemonSubscription$?.unsubscribe();
    this.specieSubscription$?.unsubscribe();
  }

}
