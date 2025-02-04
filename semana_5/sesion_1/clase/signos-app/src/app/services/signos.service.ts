import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISigno } from '../model/Isigno';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignosService {
  URL = "http://localhost:3000/signos";
  constructor(private http: HttpClient) { }

  //GET (todos los registros)
  getSignos() {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    return this.http.get(this.URL, { headers: header });
  };

  //INSERT
  postSignos(signo: ISigno) {
    return this.http.post<ISigno>(this.URL, signo).pipe(map(item => signo));
  }

  //UPDATE
  putSignos(signo: ISigno) {
    return this.http.put<ISigno>(`${this.URL}/${signo.id}`, signo).pipe(map(item => signo));
  }
  
  //DELETE (un registro)
  deleteSignos(id: number) {    
    return this.http.delete(`${this.URL}/${id}`);
  };

}
