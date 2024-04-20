import { Component, NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

}

@NgModule ({
  imports: [CommonModule, BrowserModule, NgbModule],
})

export class mainModule {}
