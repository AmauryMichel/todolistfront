import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthentificationService } from '../../services/authentification-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  constructor(
    private authentificationService: AuthentificationService
  ) {}

  isLoggedIn: boolean = localStorage.getItem("token") != null
  
  ngOnInit(): void {
    // Update isLoggedIn to change header without refreshing the page
    this.authentificationService.isAuthenticated.subscribe((isAuthenticated: any) => {
      this.isLoggedIn = isAuthenticated      
    })
  }

  logOut() {
    this.authentificationService.setLoggedOut()
  }
}
