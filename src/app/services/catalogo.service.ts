import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../domain/persona";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private httpClient: HttpClient) { }
  listClientes (): Observable<any[]> {
    return this.httpClient.get<Usuario[]>("http://localhost:8002/catalogo/todos");
  }
  buscarCatalogo(cliente: number): Observable<any[]> {
    var valor=cliente;

    return this.httpClient.get<Usuario[]>("http://localhost:8002/catalogo/buscar/"+valor);

  }
}
