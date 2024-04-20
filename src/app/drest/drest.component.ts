import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-drest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drest.component.html',
  styleUrl: './drest.component.css'
})
export class DrestComponent {

}


@NgModule({
  
  imports: [CommonModule, BrowserModule, NgbModule],
  //bootstrap: [AppComponent]
})

export class DrestModule {}

