import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // AQUI SE NECESITA CORRER ng add @ng-bootstrap/ng-bootstrap PARA AGREGAR bootstrap al proyecto
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

@NgModule ({
  imports: [CommonModule, BrowserModule, NgbModule],

})

export class  LoginModule {}
