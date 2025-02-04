import { Component, OnInit } from '@angular/core';
import { SignosService } from '../../services/signos.service';
import { ISigno } from '../../model/Isigno';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Signo } from '../../model/signo';

@Component({
  selector: 'app-gestor-signos',
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './gestor-signos.component.html',
  styleUrl: './gestor-signos.component.css'
})
export class GestorSignosComponent implements OnInit {
  constructor(private service: SignosService) { }

  //Array para los signos
  signos: ISigno[] = [];
  //Objeto signo
  signo: Signo = new Signo();
  //Booleano para insertar(true) o actualizar(false)
  insUpd = true;
  operacionTexto = 'Insertar';

  //Función que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.getSignos();
  }

  //Obtener todos los registros
  getSignos() {
    this.service.getSignos().subscribe(
      (resp: any) => this.signos = resp
    );
  };

  //formulario reactivo
  formSigno = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.minLength(3), Validators.required]),
    inicio: new FormControl('', Validators.required),
    fin: new FormControl('', Validators.required)
  });

  //Insertar signo
  procesarSigno() {
    if (this.formSigno.valid) {
      this.signo.nombre = this.formSigno.value.nombre ?? '';
      this.signo.inicio = this.formSigno.value.inicio ?? '';
      this.signo.fin = this.formSigno.value.fin ?? '';
    }
    if (this.insUpd) {
      //Insertamos
      this.signo.id = 0; // Reiniciamos un ID 0 para la inserción
      this.service.postSignos(this.signo).subscribe((resp: any) => this.getSignos());
    } else {
      //Actualizamos
      this.signo.id = parseInt(this.formSigno.value.id ?? '');
      this.service.putSignos(this.signo).subscribe(
        (resp: any) => {
          this.getSignos();
          this.insUpd = true;
          this.operacionTexto = 'Insertar';
        }
      );
    }
    this.formSigno.reset();
  };

  //Cargar los datos de la tabla al formulario
  editar(signo: ISigno) {
    this.formSigno.setValue({
      id: signo.id.toString(),
      nombre: signo.nombre,
      inicio: signo.inicio,
      fin: signo.fin,
    });
    this.operacionTexto = 'Editar';
    this.insUpd = false;
  }

  //Eliminar
  eliminar(id: number) {
    // Evitar clics accidentales al eliminar
    let opc = confirm('Desea eliminar');
    if (!opc) {
      return;
    }
    //Proceso
    this.service.deleteSignos(id).subscribe((resp: any) => this.getSignos());
  }
}
