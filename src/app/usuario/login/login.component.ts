import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../domain/persona";
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  productosLista = new Array()
  editar=0;
  productoSeleccionado: any;
  cliente: Usuario = new Usuario()
  constructor(private router: Router,private usuarioService: UsuarioService,private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  buscarPersona() {
    console.log(this.cliente);
    this.usuarioService.buscar(this.cliente).subscribe((data: any[]) => {
      console.log(data);
      console.log("2222222222222");
      this.productosLista = data;
      console.log(this.productosLista)
      console.log("2222222222fedwvweeeeeeeeee222");
      this.productoSeleccionado= data;
      this.sharedService.setProductoSeleccionadoId(this.productoSeleccionado.id);
      console.log(this.productoSeleccionado.id)
      this.router.navigate(["catalogo/dashboard"])

    }, (error) => {
      console.error(error);
      window.alert('credenciales incorrectas');
    });

  }
  guardarProducto(producto: any) {
    this.productoSeleccionado = producto;
    // Realiza las acciones necesarias con el producto seleccionado
    console.log("---------------------------------")
    console.log(this.productoSeleccionado);
  }




}
