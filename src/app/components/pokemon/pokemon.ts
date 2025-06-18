import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, FormsModule, PokemonComponent],
  templateUrl: 'pokemon.html',
  styleUrls: ['pokemon.scss'],
  standalone: true
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  nome = '';
  erro: string = '';
  tipo: string = '';

  constructor(private pokemonService: PokemonService) { }
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
        const tipo = res.types?.[0]?.type?.name || 'desconhecido';
        const hp = res.stats?.find((stat: any) => stat.stat.name === 'hp')?.base_stat || 0;
        const ataque = res.stats?.find((stat: any) => stat.stat.name === 'attack')?.base_stat || 0;
        const defesa = res.stats?.find((stat: any) => stat.stat.name === 'defense')?.base_stat || 0;
        const velocidade = res.stats?.find((stat: any) => stat.stat.name === 'speed')?.base_stat || 0;
        const movimentos = res.moves?.map((move: any) => move.move.name) || [];

        this.pokemon = {
          ...res,
          tipo,
          hp,
          ataque,
          defesa,
          velocidade,
          habilidades: res.abilities?.map((ability: any) => ability.ability.name) || [],
          movimentos: res.moves?.map((move: any) => move.move.name) || [],
        };
      },
      error: () => {
        this.erro = `Pokémon "${this.nome}" não encontrado.`;
      }
    });
  }

}
