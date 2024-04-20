import { Component,Inject,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DbebidascComponent } from './dbebidasc/dbebidasc.component';
import { DrestComponent } from './drest/drest.component';
import { LbebidascComponent } from './lbebidasc/lbebidasc.component';
import { LrestComponent } from './lrest/lrest.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { Rest1Component } from './rest1/rest1.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { MenuCollapseComponent } from './menu-collapse/menu-collapse.component';
import { InicioComponent } from './inicio/inicio.component';

import { BebidasVinoListaComponent } from './bebidas-vino-lista/bebidas-vino-lista.component';
import { BebidasVinoDetalleComponent } from './bebidas-vino-detalle/bebidas-vino-detalle.component';




@Component({
  selector: 'app-root',
  standalone: true,

  imports: 
  [RouterOutlet,AdminComponent,DbebidascComponent,DrestComponent,LbebidascComponent,LrestComponent,LoginComponent,MainComponent,
  ProveedoresComponent,Rest1Component,MenuTopComponent,MenuCollapseComponent,InicioComponent,BebidasVinoListaComponent,BebidasVinoDetalleComponent],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  
})
export class AppComponent {
  title = 'Administracion Restaurante';
  constructor() {}
}

@NgModule({
 
  imports: [CommonModule, BrowserModule, NgbModule, RouterModule],
  
})  
export class AppModule {}