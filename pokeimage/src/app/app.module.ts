import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})

export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const custom = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular-pokeimage', custom);
  }
 }
