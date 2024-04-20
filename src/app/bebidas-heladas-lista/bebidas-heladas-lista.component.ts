import { Component } from '@angular/core';
import { BebidasHeladasService } from '../service/bebidasheladas.service';
import { IBebidasHeladas } from '../interface/bebidasheladas';
import { Router

 } from '@angular/router';
@Component({
  selector: 'app-bebidas-heladas-lista',
  standalone: true,
  imports: [],
  templateUrl: './bebidas-heladas-lista.component.html',
  styleUrl: './bebidas-heladas-lista.component.css'
})
export class BebidasHeladasListaComponent {

  bebidasHeladas: IBebidasHeladas[]=[];
  
  constructor(private bebidasHeladasService: BebidasHeladasService, private router:Router){
    this.obtenerBebidasHeladas();
  }


  obtenerBebidasHeladas(){
    this.bebidasHeladasService.getBebidasHeladas().subscribe((bebidasHeladas:IBebidasHeladas[])=>{
      this.bebidasHeladas= bebidasHeladas
    })
   }
   onAdd():void{
    this.router.navigate(['bebidas-h-detalle']);
   }
   onEdit(id:string):void{
    this.router.navigate(['bebidas-h-detalle'+id]); // de momento los dos van al mismo page
    console.log(id)
   }
  }
  