import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../data/schema/project';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }

  getUserProjects(userId: string): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl + "/" + userId + "/projects");
  }
}