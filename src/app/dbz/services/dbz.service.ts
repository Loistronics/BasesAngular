import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public character : Character[] = [{id: uuid(), name : "Krillin", power: 500 }, {id: uuid(), name : "Goku", power: 9500}, {id: uuid(), name:"Gohan",power:7000},{id: uuid(), name:"Vegeta",power:8500}];

    addCharacter(character : Character) : void{

        const newCharacter : Character = {
            id: uuid(),
            ...character
        }
        ;debugger
        this.character.push(newCharacter);
    }

    onDeleteByIdCharacter(id : string):void{
        this.character = this.character.filter( caracter => caracter.id != id);
    }

    /* onDeleteCharacter(index : number):void{
        this.character.splice(index,1); //Solo Borra un elemento
    } */


    
}