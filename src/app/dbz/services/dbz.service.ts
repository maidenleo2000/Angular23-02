import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from "uuid"; //instalar npm i --save-dev @types/uuid para que funcione

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 7500
    }
  ];

  oneNewCharacterRecibido(character: Character):void {
    // console.log('Main Page');
    // console.log(character);
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power,
    }
    this.characters.push(newCharacter);
    //this.characters.push(character);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index, 1);
  // }

  //?Se crea un nuevo metodo para no usar el de arriba y eliminar por ID que ahora si lo tenemos.
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id )
  }


}


