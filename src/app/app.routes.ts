import { Routes } from '@angular/router';
import { PokemonComponent } from '../app/components/pokemon/pokemon';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent }

];
