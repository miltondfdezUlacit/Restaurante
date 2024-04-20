import { Component } from '@angular/core';
import { LicoresService } from '../service/licores.service';
import { ILicores } from '../interface/licores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas-licores-lista',
  standalone: true,
  imports: [],
  templateUrl: './bebidas-licores-lista.component.html',
  styleUrl: './bebidas-licores-lista.component.css'
})
export class BebidasLicoresListaComponent {
    bebidasLicores: ILicores[]=[];
    
    constructor(private bebidasLicoresService: LicoresService, private router:Router){
      this.obtenerBebidasLicores();
    }
  
  
    obtenerBebidasLicores(){
      this.bebidasLicoresService.getBebidasLicores().subscribe((bebidasLicores:ILicores[])=>{
        this.bebidasLicores= bebidasLicores
      })
     }
     onAdd():void{
      this.router.navigate(['bebidas-licores-detalle']);
     }
     onEdit(id:string):void{
      this.router.navigate(['bebidas-licores-detalle'+id]); // de momento los dos van al mismo page
      console.log(id)
     }
    }
