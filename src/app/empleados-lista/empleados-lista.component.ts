import { Component } from '@angular/core';
import { IEmpleados } from '../interface/empleados';
import { EmpleadosService } from '../service/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-lista',
  standalone: true,
  imports: [],
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.css'
})


export class EmpleadosListaComponent {

  empleados: IEmpleados[]=[];
  
  constructor(private empleadosService: EmpleadosService, private router:Router){

    this.obtenerEmpleados();
  }

  
  obtenerEmpleados(){
    this.empleadosService.getEmpleados().subscribe((empleados:IEmpleados[])=>{
      this.empleados= empleados
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

  


