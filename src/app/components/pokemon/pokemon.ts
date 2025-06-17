import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, FormsModule, PokemonComponent],
  templateUrl: 'pokemon.html',
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  nome = '';
  erro: string = '';

  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    // Inicialização se necessário
  }

buscarPokemon() {
  this.erro = '';
  this.pokemon = null;

  const nome = this.nome.trim().toLowerCase();

  if (!nome) {
    this.erro = 'Digite um nome de Pokémon.';
    return;
  }

  this.pokemonService.getPokemon(nome).subscribe({
    next: (res) => {
      this.pokemon = res;
    },
    error: () => {
      this.erro = `Pokémon "${this.nome}" não encontrado.`;
    }
  });
}

}
