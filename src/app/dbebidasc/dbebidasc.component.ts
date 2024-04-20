import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-dbebidasc',
  standalone: true,
  imports: [],
  templateUrl: './dbebidasc.component.html',
  styleUrl: './dbebidasc.component.css'
})
export class DbebidascComponent {

}

@NgModule({
  imports: [CommonModule, BrowserModule, NgbModule],
  //bootstrap: [AppComponent]
})

export class DbebidascModule {}

