import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
//?Aca recibimos el character enviado por main-page.component.ts de padre a hijo con @INPUT(). El INPUT va en el HIJO, es decir a donde se va a recibir esa propiedad

@Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power:10
    }
  ]

@Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number):void{
    //TODO Emitir ID del personaje

    console.log(index)

    this.onDeleteId.emit(index)
  }
}
