import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../../data/schema/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private http: HttpClient) {}

  public isAuthenticated = new Subject()

  private authUrl = '/auth';
  private registerUrl = '/register'
  private loginUrl = '/login'
  
  register(user: User) {
    return this.http.post(environment.apiUrl + this.authUrl + this.registerUrl, user, { responseType: 'text' })
  }

  login(user: User) {
    return this.http.post(environment.apiUrl + this.authUrl + this.loginUrl, user, { responseType: 'text' });
  }

  setLoggedIn(token: string, username: string) {  
    let splitToken = token.split("!")
    localStorage.setItem('token', splitToken[1])

    let user = new User(parseInt(splitToken[0]), username)
    localStorage.setItem('user', JSON.stringify(user))
    this.isAuthenticated.next(true);
  }

  setLoggedOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.isAuthenticated.next(false);
  }
}
