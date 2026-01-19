import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Dialog } from '@angular/cdk/dialog'

import { CreateProjectDialog } from './create-project-dialog/create-project-dialog';
import { User } from '../../../data/schema/user';
import { Project } from '../../../data/schema/project';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-project-list',
  imports: [RouterLink],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  constructor(
    private userService: UserService,
  ) {}

  private dialog = inject(Dialog)
  protected projectList: Array<Project>

  displayProjectForm() {
    this.dialog.open(CreateProjectDialog)
  }
  
  ngOnInit() {
    let user: User = JSON.parse(localStorage.getItem("user") || '')
    if (user.id == null) return

    this.userService.getUserProjects(user.id.toString()).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}