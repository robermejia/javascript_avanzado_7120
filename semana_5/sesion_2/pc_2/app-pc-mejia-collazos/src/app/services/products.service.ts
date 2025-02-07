import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/productos'; // Cambia esto a tu URL real

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  postProducto(producto: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, producto);
  }

  putProducto(producto: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiUrl}/${producto.id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
