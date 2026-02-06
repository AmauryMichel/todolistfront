import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog'

import { CreateNotegroupDialog } from './create-notegroup-dialog/create-notegroup-dialog';

import { Project } from '../../../data/schema/project';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-project-page',
  imports: [],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
  private route = inject(ActivatedRoute)
  private projectId: string
  protected project: Project

  constructor(
    private projectService: ProjectService,
    private changeDetection: ChangeDetectorRef
  ) {
    this.projectId = this.route.snapshot.paramMap.get('id') || ''
  }

  private dialog = inject(Dialog)

  displayNoteGroupForm() {
    this.dialog.open(CreateNotegroupDialog, {data: {project: this.project}})
  }

  ngOnInit() {
    this.projectService.getProject(this.projectId).subscribe(
      result => {
        this.project = result
        this.changeDetection.detectChanges()
      }
    )
  }
}
