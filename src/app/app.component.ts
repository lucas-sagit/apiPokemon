import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from "./components/pokemon/pokemon";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonComponent, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'api';
}


