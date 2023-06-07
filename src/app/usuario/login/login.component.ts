import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../domain/persona";
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  productosLista = new Array()
  editar=0;
  cliente: Usuario = new Usuario()
  constructor(private router: Router,private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  buscarPersona() {
    console.log(this.cliente);
    this.usuarioService.buscar(this.cliente).subscribe((data: any[]) => {
      console.log(data);
      this.productosLista = data;
      this.router.navigate(["catalogo/dashboard"])

    }, (error) => {
      console.error(error);
      window.alert('credenciales incorrectas');
    });
  }


}
