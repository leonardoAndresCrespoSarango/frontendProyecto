import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../domain/persona";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }
  save(cliente: Usuario): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8001/usuario/crear", cliente);
  }
  updateCliente(cliente: Usuario): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8001/usuario/actualizar/{id}", cliente);
  }
}
