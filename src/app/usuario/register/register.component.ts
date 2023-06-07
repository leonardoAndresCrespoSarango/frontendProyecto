import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../domain/persona";
import { Router } from "@angular/router";
import { UsuarioService } from "../../services/usuario.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  editar = 0;
  cliente: Usuario = new Usuario()

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private usuarioIdService: SharedService
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.cliente);

    if (this.editar == 0) {
      this.usuarioService.save(this.cliente).subscribe(
        (data) => {
          console.log(JSON.stringify(data));

          // Establecer el usuarioId en el servicio
          console.log("hola1");
          console.log(data);
          console.log(data.length);
          console.log(data[0]);


        },
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Error de red o de cliente
            console.error('Error:', error.error.message);
          } else {
            // Error del servidor
            window.alert(`Código de error ${error.status}, ${JSON.stringify(error.error)}`);
          }
        }
      );
    } else {
      this.usuarioService.updateCliente(this.cliente).subscribe(
        (data) => {
          console.log(JSON.stringify(data));

          // Establecer el usuarioId en el servicio
          console.log("hola");
          console.log(data);
          console.log(data.length);
          console.log(data[0]);


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

    this.cliente = new Usuario();
  }
}
