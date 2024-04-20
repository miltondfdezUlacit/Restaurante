import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LicoresService } from '../service/licores.service';

@Component({
  selector: 'app-bebidas-licores-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bebidas-licores-detalle.component.html',
  styleUrl: './bebidas-licores-detalle.component.css'
})
export class BebidasLicoresDetalleComponent {
  formularioCrear: FormGroup;
  constructor(
    private router: Router,
    private licores: LicoresService) {

    this.formularioCrear = new FormGroup({
      codigo: new FormControl(""),
      nombre: new FormControl(""),
      marca: new FormControl(""),
      precioBotella: new FormControl(0),
      precioUnitario: new FormControl(0),
      nacionalidad: new FormControl(""),
      restaurante: new FormControl(""),
    });

  }

submit(e: Event): void {
  e.preventDefault();
  this.licores
    .addBebidasLicores(this.formularioCrear.value)
    .subscribe(data => {
      this.router.navigate(["bebidas-licores-lista"]);
    });
}
cancelar(): void {
  this.router.navigate(["bebidas-licores-lista"]);
}
}
