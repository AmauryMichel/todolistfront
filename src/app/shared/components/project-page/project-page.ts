import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ɵInternalFormsSharedModule, FormsModule } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog'
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';

import { CreateNotegroupDialog } from './create-notegroup-dialog/create-notegroup-dialog';

import { ProjectService } from '../../services/project-service';
import { CreateNoteDialog } from './create-note-dialog/create-note-dialog';
import { NoteService } from '../../services/note-service';

import { Project } from '../../../data/schema/project';
import { Notegroup } from '../../../data/schema/notegroup';
import { Note } from '../../../data/schema/note';

@Component({
  selector: 'app-project-page',
  imports: [ɵInternalFormsSharedModule, FormsModule, PopoverModule, ButtonModule],
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
        //Sort all notegroups and notes
        this.project.noteGroups.sort(Notegroup.sort)
        this.project.noteGroups.forEach(noteGroup => {
          noteGroup.notes.sort(Note.sort)
        });
        this.changeDetection.detectChanges()
      }
    )
  }

  private dialog = inject(Dialog)

  displayNoteGroupDialog() {
    this.dialog.open(CreateNotegroupDialog, { data: { project: this.project } })
  }

  displayNoteDialog(groupIndex: number) {
    this.dialog.open(CreateNoteDialog, { data: { notegroup: this.project.noteGroups[groupIndex] } })
  }

  noteSetCompleted(noteId: number, checked: boolean) {
    this.noteService.setNoteCompleted(noteId, checked).subscribe()
  }

  noteSaveEdit(note: Note) {
    this.noteService.editNoteText(note.id, note.text).subscribe()
    note.edit = false
  }

  noteDelete(noteId: number) {
    this.noteService.deleteNote(noteId).subscribe(
      result => {
        location.reload()
      }
    )
  }

  noteGroupSetCompleted(notegroup: Notegroup, checked: boolean) {
    this.noteService.setNoteGroupCompleted(notegroup.id!, checked).subscribe(
      result => {
        notegroup.completed = !notegroup.completed
      }
    )
  }

  noteGroupSaveEdit(group: Note) {
    this.noteService.editNoteGroupText(group.id!, group.text).subscribe()
    group.edit = false
  }

  noteGroupDelete(groupId: number) {
    this.noteService.deleteNoteGroup(groupId).subscribe(
      result => {
        location.reload()
      }
    )
  }
}
