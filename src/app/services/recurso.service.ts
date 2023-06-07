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
    return this.httpClient.post<any>("http://localhost:8001/recursos/crear", recurso);
  }
  updateCliente(recurso: Recurso): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8001/usuario/actualizar/{id}", recurso);
  }
}
