import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
}) 
export class PersonajesComponent {

  get personajes() {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) {
  }
}
