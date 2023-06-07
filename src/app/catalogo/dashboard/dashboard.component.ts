import { Component, OnInit } from '@angular/core';
import {CatalogoService} from "../../services/catalogo.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../../domain/persona";
import {Recurso} from "../../domain/recurso";
import {RecursoService} from "../../services/recurso.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productList: any[] = [
    {
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 9.99
    },
    {
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 19.99
    },
    {
      title: "Producto 3",
      description: "Descripción del producto 3",
      price: 14.99
    }
  ];
  productosLista = new Array()
  Catalogo: any
  productoSeleccionado: any;
  editar=0;
  cliente: Recurso = new Recurso()
  constructor(private router: Router,
              private productoService: CatalogoService,
              private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.loadProducts()

  }
  loadProducts() {
    this.productoService.listClientes().subscribe((data: any) => {
      this.productosLista = data;
      console.log(this.productosLista);
    });
  }
  guardarProducto(producto: any) {
    this.productoSeleccionado = producto.id;
    // Realiza las acciones necesarias con el producto seleccionado
    console.log(this.productoSeleccionado);
  }
  guardar(producto: any) {
    console.log(this.cliente);
    this.productoSeleccionado = producto.id;

    // Obtener el valor de catalogoId desde productoSeleccionado
    const catalogoId = this.productoSeleccionado.id;

    if (this.editar == 0) {
      // Asignar catalogoId a this.cliente.catalogoId
      this.cliente.catalogoId = catalogoId;

      this.recursoService.save(this.cliente).subscribe(
        (data) => {
          console.log(JSON.stringify(data));
        },
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Error de red o de cliente
            console.error('Error:', error.error.message);
          } else {
            // Error del servidor
            console.error(`Código de error ${error.status}, ${JSON.stringify(error.error)}`);
          }
        }
      );
    } else {
      // Asignar catalogoId a this.cliente.catalogoId
      this.cliente.catalogoId = catalogoId;

      this.recursoService.updateCliente(this.cliente).subscribe(
        (data) => {
          console.log(JSON.stringify(data));
        },
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Error de red o de cliente
            console.error('Error:', error.error.message);
          } else {
            // Error del servidor
            console.error(`Código de error ${error.status}, ${JSON.stringify(error.error)}`);
          }
        }
      );
    }

    this.cliente = new Recurso();
  }




}
