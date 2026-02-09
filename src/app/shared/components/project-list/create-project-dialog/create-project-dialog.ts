import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ProjectService } from '../../../services/project-service';
import { Project } from '../../../../data/schema/project';
import { User } from '../../../../data/schema/user';

@Component({
  selector: 'app-create-project-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-project-dialog.html',
  styleUrl: './create-project-dialog.css',
})
export class CreateProjectDialog {
  constructor(
    private projectService: ProjectService,
  ) {}

  projectForm = new FormGroup({
    projectName: new FormControl<string>('', {nonNullable: true, validators:[Validators.required]}),
    description: new FormControl<string>(''),
  })

  protected createProject() {
    let user: User = JSON.parse(localStorage.getItem('user') || "")    
    let newProject = new Project(user, this.projectForm.getRawValue().projectName)

    this.projectService.createProject(newProject).subscribe(
      result => {
        location.reload()
      }
    )
  }
}