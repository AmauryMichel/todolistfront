import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './shared/services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    message: string = '';
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.message = data);
  }
}