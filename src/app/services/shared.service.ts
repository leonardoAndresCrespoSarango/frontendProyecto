import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private usuarioId: number = 0;


  constructor() { }

  setUsuarioId(id: number) {
    this.usuarioId = id;
  }

  getUsuarioId(): number {
    return this.usuarioId;
  }

}
