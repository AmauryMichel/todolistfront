import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../data/schema/user';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) {}
  
  register(user: User) {
    return this.http.post(this.apiUrl + '/register', user, { responseType: 'text' })
  }

  login(user: User) {
    return this.http.post(this.apiUrl + '/login', user, { responseType: 'text' });
  }
}
