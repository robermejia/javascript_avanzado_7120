import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos'; // Cambia esto a tu URL real

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.apiUrl);
  }

  postProducto(producto: IProducto): Observable<IProducto> {
    return this.http.post<IProducto>(this.apiUrl, producto);
  }

  putProducto(producto: IProducto): Observable<IProducto> {
    return this.http.put<IProducto>(`${this.apiUrl}/${producto.id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
