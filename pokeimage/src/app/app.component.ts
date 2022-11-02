import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'pokeimage';
  sprite: string = '';

  @Input()
  set spriteUrl(spritePngUrl: string) {
    this.sprite = spritePngUrl;
  }
}
