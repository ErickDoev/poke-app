import { Component, OnInit } from '@angular/core';
import { GetAllPokemonListFacade } from 'src/app/store/facades/pokemon/get-all-pokemons.facade';


@Component({
  selector: 'app-pokemon-layout',
  templateUrl: './pokemon-layout.component.html',
  styleUrls: ['./pokemon-layout.component.scss']
})
export class PokemonLayoutComponent implements OnInit {

  constructor(
    private getAllPokemonsFacade: GetAllPokemonListFacade
  ) { }

  ngOnInit(): void {
    this.getAllPokemonsFacade.fetch();
  }

}
