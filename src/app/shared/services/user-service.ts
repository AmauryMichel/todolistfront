import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../data/schema/project';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = '/users';
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<string> {
    return this.http.get(environment.apiUrl + this.usersUrl, { responseType: 'text' });
  }

  getUserProjects(userId: string): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiUrl + this.usersUrl + "/" + userId + "/projects");
  }
}