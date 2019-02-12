import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {POKEMONS} from '../mock-pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  private pokemons: Pokemon[];

  constructor() { }

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

}
