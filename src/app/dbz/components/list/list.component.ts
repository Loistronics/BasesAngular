import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listCharacter : Character[] = [{name:"Trunks", power:5000}];

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id : string | undefined){
    this.onDeleteId.emit(id);
  }

}
