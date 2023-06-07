import { Component, OnInit } from '@angular/core';
import {Recurso} from "../../domain/recurso";
import {Router} from "@angular/router";
import {CatalogoService} from "../../services/catalogo.service";
import {RecursoService} from "../../services/recurso.service";
import {SharedService} from "../../services/shared.service";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
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
  productosLista: any[] = [];
  Catalogo: any;
  productoSeleccionado: any;
  editar = 0;
  cliente: Recurso = new Recurso();
  catalogoId: number;
  usuarioSeleccionadoId!: number;
  constructor(
    private router: Router,
    private productoService: RecursoService,
    private recursoService: RecursoService,
    private usuarioIdService: SharedService,
  private sharedService: SharedService,
    private usuarioService: UsuarioService
  ) {
    this.catalogoId = 0;
  }

  ngOnInit(): void {

    this.usuarioSeleccionadoId = this.sharedService.getProductoSeleccionadoId();
    console.log("i2222222")
    console.log(this.usuarioSeleccionadoId);
    console.log("i2222222")

    this.loadProducts();
  }
  volver(){
    this.router.navigate(["catalogo/dashboard"])
  }
  eliminarProducto(producto: Recurso){
    console.log("ELIMINANDO")
    this.productoService.deleteProducto(this.usuarioSeleccionadoId).subscribe((data: any)=>{
      console.log(data);})


  }

  loadProducts() {
    this.productoService.buscar(this.usuarioSeleccionadoId).subscribe((data: any) => {
      this.productosLista = data;
      this.productoSeleccionado= data;
      console.log("...........................")
      console.log(this.productosLista);
      console.log("...........................")
      console.log("..........................dfdfdfd.")
      console.log(this.productoSeleccionado.id)
    });
  }
  loadProducts1() {
    this.usuarioService.buscarCliente(this.usuarioSeleccionadoId).subscribe((data: any) => {
      this.productosLista = data;
      console.log(this.productosLista);
    });
  }
}
