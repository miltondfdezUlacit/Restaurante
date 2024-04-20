import { Component } from '@angular/core';
import { IVinos } from '../interface/vinos';
import { VinosService } from '../service/vinos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas-vino-lista',
  standalone: true,
  imports: [],
  templateUrl: './bebidas-vino-lista.component.html',
  styleUrl: './bebidas-vino-lista.component.css'
})



export class BebidasVinoListaComponent {  
  vinos: IVinos[]=[];
  
  constructor(private vinosService: VinosService, private router:Router){

    this.obtenerVinos();
  }
  

  obtenerVinos(){
    this.vinosService.getVinos().subscribe((vinos:IVinos[])=>{
      this.vinos= vinos
    })
   }
   onAdd():void{
    this.router.navigate(['bebidas-vino-detalle']);
   }
   onEdit(id:string):void{
    this.router.navigate(['bebidas-vino-detalle'+id]); // de momento los dos van al mismo page
    console.log(id)
   }

  }
