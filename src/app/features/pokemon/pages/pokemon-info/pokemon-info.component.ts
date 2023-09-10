import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
    private route: ActivatedRoute,
    private pokemonFacade: GetPokemonsFacade,
    private specieFacade: GetSpecieFacade,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokemonFacade.fetch(Number(this.id));    

    this.pokemonSubscription$ = this.pokemonFacade.entity$.subscribe(poke => {
      this.pokemon = poke;
    })

    this.specieFacade.fetch(Number(this.id));

    this.specieSubscription$ = this.specieFacade.entity$.subscribe(ent => {
      this.specie = ent;
      this.color = ent?.color.name;
      this.text = ent?.flavor_text_entries[0].flavor_text;
    })
  }

  onBack(){
    this.router.navigateByUrl('pokemons')
  }

  ngOnDestroy(): void {
    this.pokemonSubscription$?.unsubscribe();
    this.specieSubscription$?.unsubscribe();
  }

}
