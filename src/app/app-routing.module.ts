import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./usuario/login/login.component";
import {RegisterComponent} from "./usuario/register/register.component";
import {DashboardComponent} from "./catalogo/dashboard/dashboard.component";
import {InscripcionComponent} from "./recurso/inscripcion/inscripcion.component";


const routes: Routes = [
  {path:"usuario/login", component: LoginComponent},
  {path:"", component: RegisterComponent},
  {path:"usuario/register", component: RegisterComponent},
  {path:"catalogo/dashboard", component: DashboardComponent},
  {path:"catalogo/cursos", component: InscripcionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
