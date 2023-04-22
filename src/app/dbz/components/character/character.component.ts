import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);

    //?Validacion en donde si no me mandan nombre no hace nada
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);


    // this.character.name = '';
    // this.character.power = 0;

    //?OTRA FORMA MAS CORTA:
    this.character = {name: '', power: 0};
  }

}
