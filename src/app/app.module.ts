//?Primero van las importaciones de Angular, lo que es oficial.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//?2 - Van las importaciones de modulos externos
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

//?3- Por ultimo nuestro codigo
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
