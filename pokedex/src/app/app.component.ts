import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  imageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  pokeimage = 'http://localhost:9001/main.js';
}
