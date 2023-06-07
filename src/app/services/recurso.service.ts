import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Recurso} from "../domain/recurso";
import {Usuario} from "../domain/persona";

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private httpClient: HttpClient) { }
  save(recurso: Recurso): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8003/recursos/crear", recurso);
  }
  updateCliente(recurso: Recurso): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8003/usuario/actualizar/{id}", recurso);
  }
  buscar(cliente: Recurso): Observable<any[]> {
    var valor=1;

    return this.httpClient.get<Usuario[]>("http://localhost:8003/recursos/usuario/"+valor);

  }
  deleteProducto(producto: Recurso): Observable<any[]> {
    var valor=producto.catalogoId;
    return this.httpClient.get<Recurso[]>("http://localhost:8003/recursos/eliminar/"+valor);

  }
}
