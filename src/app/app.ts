import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from "./shared/components/header/header";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    ToastModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}