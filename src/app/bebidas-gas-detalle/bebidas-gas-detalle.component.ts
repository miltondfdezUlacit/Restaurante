import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GaseosasService } from '../service/gaseosas.service';

@Component({
  selector: 'app-bebidas-gas-detalle',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './bebidas-gas-detalle.component.html',
  styleUrl: './bebidas-gas-detalle.component.css'
})
export class BebidasGasDetalleComponent {
  formularioCrear: FormGroup;
  constructor(
    private router: Router,
    private gaseosas: GaseosasService) {

    this.formularioCrear = new FormGroup({
      codigo: new FormControl(""),
      nombre: new FormControl(""),
      precio: new FormControl(0),
      restaurante: new FormControl(""),
    });

  }

submit(e: Event): void {
  e.preventDefault();
  this.gaseosas
    .addBebidasGaseosas(this.formularioCrear.value)
    .subscribe(data => {
      this.router.navigate(["bebidas-g-lista"]);
    });
}
cancelar(): void {
  this.router.navigate(["bebidas-g-lista"]);
}
}
