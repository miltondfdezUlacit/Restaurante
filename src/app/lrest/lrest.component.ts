import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lrest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lrest.component.html',
  styleUrl: './lrest.component.css',
})
export class LrestComponent {

}

@NgModule ({
   
  imports: [CommonModule, BrowserModule, NgbModule],
})

export class lrestModule {}
