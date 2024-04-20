import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BebidasHeladasService } from '../service/bebidasheladas.service';

@Component({
  selector: 'app-bebidas-heladas-detalle',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './bebidas-heladas-detalle.component.html',
  styleUrl: './bebidas-heladas-detalle.component.css'
})
export class BebidasHeladasDetalleComponent {
  formularioCrear: FormGroup;
  constructor(
    private router: Router,
    private heladas: BebidasHeladasService) {

    this.formularioCrear = new FormGroup({
      codigo: new FormControl(""),
      nombre: new FormControl(""),
      precio: new FormControl(0),
      restaurante: new FormControl(""),
    });

  }

submit(e: Event): void {
  e.preventDefault();
  this.heladas
    .addBebidasHeladas(this.formularioCrear.value)
    .subscribe(data => {
      this.router.navigate(["bebidas-h-lista"]);
    });
}
cancelar(): void {
  this.router.navigate(["bebidas-h-lista"]);
}
}
