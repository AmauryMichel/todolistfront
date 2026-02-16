import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog'

import { CreateNotegroupDialog } from './create-notegroup-dialog/create-notegroup-dialog';

import { ProjectService } from '../../services/project-service';
import { CreateNoteDialog } from './create-note-dialog/create-note-dialog';
import { NoteService } from '../../services/note-service';

import { Project } from '../../../data/schema/project';
import { Note } from '../../../data/schema/note';

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
    private noteService: NoteService,
    private changeDetection: ChangeDetectorRef
  ) {
    this.projectId = this.route.snapshot.paramMap.get('id') || ''
  }

  ngOnInit() {
    this.projectService.getProject(this.projectId).subscribe(
      result => {
        this.project = result
        this.changeDetection.detectChanges()
      }
    )
  }

  private dialog = inject(Dialog)

  displayNoteGroupDialog() {
    this.dialog.open(CreateNotegroupDialog, { data: { project: this.project } })
  }

  displayNoteDialog(groupIndex: number) {
    this.dialog.open(CreateNoteDialog, { data: { notegroup: this.project.noteGroups![groupIndex] } })
  }

  noteSetCompleted(noteId: number, checked: boolean) {
    this.noteService.setNoteCompleted(noteId, checked).subscribe()
  }

  noteSaveEdit(note: Note) {
    this.noteService.editNoteText(note.id!, note.text).subscribe()
    note.edit = false
  }

  noteDelete(noteId: number) {
    this.noteService.deleteNote(noteId).subscribe(
      result => {
        location.reload()
      }
    )
  }
}
