import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  imports: [NgIf, NgSwitch, NgSwitchDefault, NgSwitchCase, NgFor],
  templateUrl: './estructurales.component.html',
  styleUrl: './estructurales.component.css'
})
export class EstructuralesComponent {
  monto = 5;
  dia = 'SA';
  meses = ['Ene','Feb','Mar','Abr'];
}
