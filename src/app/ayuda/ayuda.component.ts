import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent {

}
