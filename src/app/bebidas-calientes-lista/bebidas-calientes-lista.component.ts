import { Component } from '@angular/core';
import { BebidasCalientesService } from '../service/bebidascalientes.service';
import { IBebidasCalientes } from '../interface/bebidascalientes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas-calientes-lista',
  standalone: true,
  imports: [],
  templateUrl: './bebidas-calientes-lista.component.html',
  styleUrl: './bebidas-calientes-lista.component.css'
})
export class BebidasCalientesListaComponent {

  bebidasCalientes: IBebidasCalientes[]=[];
  
  constructor(private bebidasCalientesService: BebidasCalientesService, private router:Router){
    this.obtenerBebidasCalientes();
  }


  obtenerBebidasCalientes(){
    this.bebidasCalientesService.getBebidasCalientes().subscribe((bebidasCalientes:IBebidasCalientes[])=>{
      this.bebidasCalientes= bebidasCalientes
    })
   }
   onAdd():void{
    this.router.navigate(['bebidas-calientes-detalle']);
   }
   onEdit(id:string):void{
    this.router.navigate(['bebidas-calientes-detalle'+id]); // de momento los dos van al mismo page
    console.log(id)
   }
  }
  

  



