import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent{

    constructor(private dbz : DbzService){}

    get character() : Character[]{
        return [...this.dbz.character];
    }

    onDeleteByIdCharacter(id : string):void{
        this.dbz.onDeleteByIdCharacter(id);
    }

    addCharacter(caracter : Character):void{
        this.dbz.addCharacter(caracter);
    }



}