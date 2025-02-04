import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Signo } from '../../model/signo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [FormsModule, NgFor],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})

export class TemplateComponent {
  
  signo = new Signo();
  signos: Signo[] = [];
  agregarSigno() {
    this.signos.push({... this.signo});
  }
}
