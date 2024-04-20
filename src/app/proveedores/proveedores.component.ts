import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { IProveedores,IProveedoresUpdate } from '../interface/proveedores';
import { Router } from '@angular/router';
import { ProveedoresService } from '../service/proveedores.service';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {

  proveedores: IProveedores[]=[];
  
  constructor(private proveedoresService: ProveedoresService, private router:Router){

    this.obtenerProovedores();
  }
  
  
  obtenerProovedores(){
    this.proveedoresService.getProveedores().subscribe((proveedores:IProveedores[])=>{
      this.proveedores= proveedores;
    })
   }
   onAdd():void{
    this.router.navigate(['proovedores']);
   }
   onEdit(id:string):void{
    this.router.navigate(['proovedores'+id]); // de momento los dos van al mismo page
    console.log(id)
   }


}

@NgModule ({ 
  imports: [CommonModule, BrowserModule, NgbModule],
  //bootstrap: [AppComponent]
})

export class  ProveedoresModule {}
