import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../data/schema/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private http: HttpClient) {}

  public isAuthenticated = new Subject()

  private apiUrl = 'http://localhost:8080/auth';
  
  register(user: User) {
    return this.http.post(this.apiUrl + '/register', user, { responseType: 'text' })
  }

  login(user: User) {
    return this.http.post(this.apiUrl + '/login', user, { responseType: 'text' });
  }

  setLoggedIn(token: string, username: string) {  
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    this.isAuthenticated.next(true);
  }

  setLoggedOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.isAuthenticated.next(false);
  }
}
