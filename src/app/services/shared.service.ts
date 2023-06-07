import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private productoSeleccionadoId!: number;

  constructor() { }

  setProductoSeleccionadoId(id: number) {
    this.productoSeleccionadoId! = id;
  }

  getProductoSeleccionadoId() {
    return this.productoSeleccionadoId!;
  }


}
