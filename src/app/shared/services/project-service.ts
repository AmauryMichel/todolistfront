import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Project } from '../../data/schema/project';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  private projectUrl = '/projects'
  private createUrl = '/create'

  createProject(project: Project) {
    return this.http.post(environment.apiUrl + this.projectUrl + this.createUrl, project, { responseType: 'text' })
  }

  getProject(projectId: string): Observable<Project> {
    return this.http.get<Project>(environment.apiUrl + this.projectUrl + "/" + projectId);
  }
}