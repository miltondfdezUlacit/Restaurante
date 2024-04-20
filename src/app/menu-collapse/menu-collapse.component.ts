import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-menu-collapse',
  standalone: true,
  imports: [RouterModule,RouterOutlet,LoginComponent], 
  templateUrl: './menu-collapse.component.html',
  styleUrl: './menu-collapse.component.css'
})
export class MenuCollapseComponent {

}
