import { Component } from '@angular/core';
import { IGaseosas } from '../interface/gaseosas';
import { GaseosasService } from '../service/gaseosas.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bebidas-gas-lista',
  standalone: true,
  imports: [],
  templateUrl: './bebidas-gas-lista.component.html',
  styleUrl: './bebidas-gas-lista.component.css'
})
export class BebidasGasListaComponent {

  gaseosas : IGaseosas[]=[];
  constructor(private gaseosasService: GaseosasService, private router:Router){
    this.obtenerBebidasGaseosas();

  }


  obtenerBebidasGaseosas(){
    this.gaseosasService.getBebidasGaseosas().subscribe((gaseosas:IGaseosas[])=>{
      this.gaseosas= gaseosas
    })
   }
   onAdd():void{
    this.router.navigate(['bebidas-g-detalle']);
   }
   onEdit(id:string):void{
    this.router.navigate(['bebidas-g-detalle'+id]); // de momento los dos van al mismo page
    console.log(id)
   }
  }


  



