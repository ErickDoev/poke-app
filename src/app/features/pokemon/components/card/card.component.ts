import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()imgUrl: string | undefined;
  @Input()name: string | undefined;
  @Input()id: string | undefined;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewPokemon(): void{
    this.router.navigate(['pokemons', this.id]);
  }

}
