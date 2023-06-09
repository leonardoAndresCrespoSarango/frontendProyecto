import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';
import { DashboardComponent } from './catalogo/dashboard/dashboard.component';
import { InscripcionComponent } from './recurso/inscripcion/inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
