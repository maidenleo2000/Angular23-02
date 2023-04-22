import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
//?Aca aprendemos @INPUT() mandando este array characters para el componente list.component.ts. Como este es el PADRE vamos a ir al main-page.component.html y en el TAG de dbz-list se le agrega un corchete con la propiedad DEL HIJO (characterList) y se iguala al valor del PADRE (characters)

//?Esta es la inyeccion de dependencia para traer la info de service
constructor(private dbzService: DbzService ){}


  get characters(): Character[]{
    //return this.dbzService.characters; //Si lo dejo asi modifico la data del servicio y si quiero dejar esos datos intactos uso mejor el operador spread para crear una copia y no tocar el servicio. En caso de venir de una base de datos es distinto y ahi si voy a querer modificar esos datos por lo que no usaria spread, pero en este ejercicio si

    return [...this.dbzService.characters];

  }

  deleteCharacterById(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  oneNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

//!Esta parte está ahora en el servicio
  // public characters: Character[] = [
  //   {
  //     name: 'Krillin',
  //     power: 1000
  //   },
  //   {
  //     name: 'Goku',
  //     power: 9500
  //   },
  //   {
  //     name:'Vegeta',
  //     power: 7500
  //   }
  // ];

  // oneNewCharacterRecibido(character: Character):void {
  //   // console.log('Main Page');
  //   // console.log(character);
  //   this.characters.push(character);
  // }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index, 1);
  // }

}
