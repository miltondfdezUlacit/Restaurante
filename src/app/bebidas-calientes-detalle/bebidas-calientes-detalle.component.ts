import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BebidasCalientesService } from '../service/bebidascalientes.service';

@Component({
  selector: 'app-bebidas-calientes-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bebidas-calientes-detalle.component.html',
  styleUrl: './bebidas-calientes-detalle.component.css'
})
export class BebidasCalientesDetalleComponent {
  formularioCrear: FormGroup;
  constructor(
    private router: Router,
    private bebidasCalientes: BebidasCalientesService) {

    this.formularioCrear = new FormGroup({
      codigo: new FormControl(""),
      nombre: new FormControl(""),
      precio: new FormControl(0),
      restaurante: new FormControl(""),
    });

  }






submit(e: Event): void {
  e.preventDefault();
  this.bebidasCalientes
    .addBebidasCalientes(this.formularioCrear.value)
    .subscribe(data => {
      this.router.navigate(["bebidas-calientes-lista"]);
    });
}
cancelar(): void {
  this.router.navigate(["bebidas-calientes-lista"]);
}
}
