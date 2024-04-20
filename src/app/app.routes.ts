import { Routes,RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DbebidascComponent } from './dbebidasc/dbebidasc.component';
import { DrestComponent } from './drest/drest.component';
import { LbebidascComponent } from './lbebidasc/lbebidasc.component';
import { LrestComponent } from './lrest/lrest.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { MainComponent } from './main/main.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { Rest1Component } from './rest1/rest1.component';


import { BebidasCalientesDetalleComponent } from './bebidas-calientes-detalle/bebidas-calientes-detalle.component';
import { BebidasCalientesListaComponent } from './bebidas-calientes-lista/bebidas-calientes-lista.component';

import { BebidasGasDetalleComponent} from './bebidas-gas-detalle/bebidas-gas-detalle.component';
import { BebidasGasListaComponent } from './bebidas-gas-lista/bebidas-gas-lista.component';

import { BebidasHeladasDetalleComponent } from './bebidas-heladas-detalle/bebidas-heladas-detalle.component';
import { BebidasHeladasListaComponent } from './bebidas-heladas-lista/bebidas-heladas-lista.component';

import { BebidasLicoresDetalleComponent } from './bebidas-licores-detalle/bebidas-licores-detalle.component';
import { BebidasLicoresListaComponent } from './bebidas-licores-lista/bebidas-licores-lista.component';

import { BebidasVinoDetalleComponent } from './bebidas-vino-detalle/bebidas-vino-detalle.component';
import { BebidasVinoListaComponent } from './bebidas-vino-lista/bebidas-vino-lista.component';

import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

import { MesasDetalleComponent } from './mesas-detalle/mesas-detalle.component';
import { MesasListaComponent } from './mesas-lista/mesas-lista.component';

import { EmpleadosDetalleComponent } from './empleados-detalle/empleados-detalle.component';
import { EmpleadosListaComponent } from './empleados-lista/empleados-lista.component';

import { FacturasDetalleComponent } from './facturas-detalle/facturas-detalle.component';
import { FacturasListaComponent } from './facturas-lista/facturas-lista.component';

import { LimpiezaDetalleComponent } from './limpieza-detalle/limpieza-detalle.component';
import { LimpiezaListaComponent } from './limpieza-lista/limpieza-lista.component';

import { MenuTopComponent } from './menu-top/menu-top.component';
import { MenuCollapseComponent } from './menu-collapse/menu-collapse.component';

import { AyudaComponent } from './ayuda/ayuda.component';

import { makeBindingParser } from '@angular/compiler';



export const routes: Routes = [


    { path: 'admin', component: AdminComponent },
    { path: 'dbebidasc', component: DbebidascComponent },
    { path: 'drest', component: DrestComponent },
    { path: 'lbebidasc', component: LbebidascComponent },
    { path: 'lrest', component: LrestComponent },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'rest1', component: Rest1Component },
    { path: 'logout', component: LogoutComponent },
    {path: 'bebidas-h-detalle', component: BebidasHeladasDetalleComponent},
    {path: 'bebidas-h-lista', component: BebidasHeladasListaComponent},
    {path: 'bebidas-g-detalle', component: BebidasGasDetalleComponent},
    {path: 'bebidas-g-lista', component: BebidasGasListaComponent},
    {path: 'bebidas-licores-detalle', component: BebidasLicoresDetalleComponent},
    {path: 'bebidas-licores-lista', component: BebidasLicoresListaComponent},


    {path: 'bebidas-vino-lista', component: BebidasVinoListaComponent},
    {path: 'bebidas-vino-detalle', component: BebidasVinoDetalleComponent},
    
    
    
    
    
    
    {path: 'mesas-detalle', component: MesasDetalleComponent},
    {path: 'mesas-lista', component: MesasListaComponent},
    {path: 'empleados-lista', component: EmpleadosListaComponent},
    {path: 'empleados-detalle', component: EmpleadosDetalleComponent},
    {path: 'clientes-detalle', component: ClientesDetalleComponent},
    {path: 'clientes-lista', component: ClientesListaComponent},
    {path: 'facturas-lista', component: FacturasListaComponent},
    {path: 'facturas-detalle', component: FacturasDetalleComponent},
    {path: 'limpieza-lista', component: LimpiezaListaComponent},
    {path: 'limpieza-detalle', component: LimpiezaDetalleComponent},
    {path: 'bebidas-calientes-lista', component: BebidasCalientesListaComponent},
    {path: 'bebidas-calientes-detalle', component: BebidasCalientesDetalleComponent},
    {path: 'menu-top', component: MenuTopComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'menu-collapse', component: MenuCollapseComponent},
    {path: 'app-root', component: MainComponent},








];
