import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mesas-grid',
  standalone: true,
  imports: [],
  templateUrl: './mesas-grid.component.html',
  styleUrl: './mesas-grid.component.css'
})
export class MesasGridComponent {
  @Input() numChairs =16; 
}
