import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  reactivoForm = new FormGroup({
    nombre: new FormControl('', Validators.minLength(4)),
    correo: new FormControl('', Validators.email)
  });
  mensaje: string = '';

  enviarForm() {
    if (this.reactivoForm.value.correo?.endsWith('@mail.com')) {
      this.mensaje='Solicitud enviada';
      this.reactivoForm.reset();
    }else{
      this.mensaje='Dominio no válido';
    }
  };
}
