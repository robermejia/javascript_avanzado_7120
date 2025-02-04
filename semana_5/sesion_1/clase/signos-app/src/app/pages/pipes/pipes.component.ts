import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [DecimalPipe,CurrencyPipe,DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  numero = 123.456789;
  moneda = 3000.20;
  fecha = new Date();
}
