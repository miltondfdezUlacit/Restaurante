import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule

 } from '@angular/router';
@Component({
  selector: 'app-menu-top',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './menu-top.component.html',
  styleUrl: './menu-top.component.css'
})
export class MenuTopComponent {

}
