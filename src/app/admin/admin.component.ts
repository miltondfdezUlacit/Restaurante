
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuTopComponent } from '../menu-top/menu-top.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,CommonModule,MenuTopComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}

export class AdminModule {}