import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './shared/services/user-service';
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
export class App {
  constructor(private userService: UserService) {}
  ngOnInit() {
    // this.userService.getUsers().subscribe();
  }
}