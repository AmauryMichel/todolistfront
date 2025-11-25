import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user';

@Component({
  selector: 'app-root',
  template: '<h1>{{ this.message }}</h1>',
})
export class AppComponent implements OnInit {
  message: string = '';
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.message = data);
  }
}