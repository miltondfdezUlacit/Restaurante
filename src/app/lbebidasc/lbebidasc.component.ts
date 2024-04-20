import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-lbebidasc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lbebidasc.component.html',
  styleUrl: './lbebidasc.component.css'
})
export class LbebidascComponent {

}

@NgModule ({
  imports: [CommonModule, BrowserModule, NgbModule],
  //bootstrap: [AppComponent]
 })

 export class  LbebidascModule {}