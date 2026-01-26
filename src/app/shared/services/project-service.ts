import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Project } from '../../data/schema/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080/projects';
  private apiUrlProject = 'http://localhost:8080/project';

  createProject(project: Project) {
    return this.http.post(this.apiUrl + '/create', project, { responseType: 'text' })
  }

  getProject(projectId: string): Observable<Project> {
    return this.http.get<Project>(this.apiUrl + "/" + projectId);
  }
}