import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VinosService } from '../service/vinos.service';

@Component({
  selector: 'app-bebidas-vino-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bebidas-vino-detalle.component.html',
  styleUrl: './bebidas-vino-detalle.component.css'
})
export class BebidasVinoDetalleComponent {

  formularioCrear: FormGroup;
  constructor(
    private router: Router,
    private vinos: VinosService,) {

    this.formularioCrear = new FormGroup({
      codigo: new FormControl(""),
      nombre: new FormControl(""),
      marca: new FormControl(""),
      precioBotella: new FormControl(0),
      precioUnitario: new FormControl(0),
      nacionalidad: new FormControl(""),
      anio: new FormControl(0),
      restaurante: new FormControl(""),
    });

  }

submit(e: Event): void {
  e.preventDefault();
  this.vinos
    .addVinos(this.formularioCrear.value)
    .subscribe(data => {
      this.router.navigate(["bebidas-vino-lista"]);
    });
}
cancelar(): void {
  this.router.navigate(["bebidas-vino-lista"]);
}
}
