import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime } from 'rxjs';
import { Pokemon, PokemonListResponse, Result } from 'src/app/models/pokemon.model';
import { GetAllPokemonListFacade } from 'src/app/store/facades/pokemon/get-all-pokemons.facade';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  pokemons!: Result[] | undefined;
  filteredPokemons: any = [];

  displayedColumns: string[] = ['name'];

  search: string = '';
  id: string = '';

  form!: FormGroup;

  constructor(
    private getAllPokemonsFacade: GetAllPokemonListFacade,
    private fb: FormBuilder,
    private router: Router
  ) { }

  onSearchPokemon(val: string){
    this.search = val;
  }

  onClick(row: Result){
    const url = row.url;
    this.id = url.split('/')[6];
    this.router.navigate(['pokemons', this.id]);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      pokemon: ['']
    });

    this.form.get('pokemon')?.valueChanges
      .pipe(debounceTime(500))
      .subscribe((pokemon: string) => {
        this.filteredPokemons = this.pokemons?.filter((poke) => poke.name.includes(pokemon));
      });

    this.getAllPokemonsFacade.entities$.subscribe(ents =>{
      this.pokemons = ents?.results;
    });
  }
}
