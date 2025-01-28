import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtributosComponent } from './components/atributos/atributos.component';
import { EstructuralesComponent } from './components/estructurales/estructurales.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AtributosComponent,EstructuralesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Signos del zodiaco';  
}
