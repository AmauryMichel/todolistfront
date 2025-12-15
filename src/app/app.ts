import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLink,
    ToastModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}