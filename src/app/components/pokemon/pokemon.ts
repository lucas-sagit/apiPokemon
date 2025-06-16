import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [HttpClientModule, CommonModule],
  templateUrl: 'pokemon.html',
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  nome = 'pikachu';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.nome).subscribe({
      next: (data) => this.pokemon = data,
      error: (err) => console.error('Erro ao buscar Pokémon:', err)
    });
  }
}
