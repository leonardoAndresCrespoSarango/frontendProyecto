import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../domain/persona";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private API_SERVER="http://localhost:8001/usuario/usu/";

  constructor(private httpClient: HttpClient) { }
  save(cliente: Usuario): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8001/usuario/crear", cliente);
  }
  updateCliente(cliente: Usuario): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8001/usuario/actualizar/{id}", cliente);
  }
  buscar(cliente: Usuario): Observable<any[]> {
    var valor=cliente.usu;
    var con=cliente.contrasenia
    return this.httpClient.get<Usuario[]>("http://localhost:8001/usuario/usu/"+valor+"/contrasenia/"+con);

  }
}
