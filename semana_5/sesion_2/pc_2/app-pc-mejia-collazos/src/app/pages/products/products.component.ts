import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../model/products';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [NgFor, NgIf, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [CurrencyPipe] // Añadir CurrencyPipe aquí
})
export class ProductosComponent implements OnInit {
  productos: IProduct[] = [];
  formProducto: FormGroup; // Formulario reactivo
  operacionTexto = 'Insertar'; // Texto para el botón de operación
  insUpd = true; // Booleano para determinar inserción o actualización

  constructor(private productoService: ProductsService, private currencyPipe: CurrencyPipe) { // Inyectar CurrencyPipe
    this.formProducto = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', [Validators.required, Validators.min(0)]) // Validación de precio
    });
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe((resp: any) => this.productos = resp);
  }

  editarProducto(producto: IProduct) {
    this.formProducto.setValue({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio
    });
    this.operacionTexto = 'Editar';
    this.insUpd = false; // Cambia a modo de actualización
  }

  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.deleteProducto(id).subscribe(() => this.obtenerProductos());
    }
  }

  procesarProducto() {
    if (this.formProducto.valid) {
      const producto: IProduct = {
        id: this.formProducto.value.id,
        nombre: this.formProducto.value.nombre,
        precio: this.formProducto.value.precio,
        marca: '',
        modelo: '',
        stock: 0
      };

      if (this.insUpd) {
        // Insertar nuevo producto
        this.productoService.postProducto(producto).subscribe(() => {
          this.obtenerProductos();
          this.formProducto.reset();
        });
      } else {
        // Actualizar producto existente
        this.productoService.putProducto(producto).subscribe(() => {
          this.obtenerProductos();
          this.formProducto.reset();
          this.insUpd = true; // Reiniciar a modo de inserción
          this.operacionTexto = 'Insertar';
        });
      }
    }
  }
}
