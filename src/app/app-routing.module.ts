import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./usuario/login/login.component";
import {RegisterComponent} from "./usuario/register/register.component";


const routes: Routes = [
  {path:"usuario/login", component: LoginComponent},
  {path:"usuario/register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }