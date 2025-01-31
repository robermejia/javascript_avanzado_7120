import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  imports: [NgClass,NgStyle],
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {
  valido = false;
  estilos = {
    'background-color':'peru',
    'color': 'white'
  };
}
