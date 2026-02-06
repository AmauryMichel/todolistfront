import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NoteService } from '../../../services/note-service';
import { Project } from '../../../../data/schema/project';
import { Notegroup } from '../../../../data/schema/notegroup';

@Component({
  selector: 'app-create-notegroup-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-notegroup-dialog.html',
  styleUrl: './create-notegroup-dialog.css',
})
export class CreateNotegroupDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: { project: Project },
    private noteService: NoteService,
  ) {}

  noteGroupForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  })

  protected createNoteGroup() {
    let name = this.noteGroupForm.getRawValue().name
    let groupOrderNumber = this.data.project.noteGroups?.length || 0
    let newNoteGroup = new Notegroup(this.data.project, name, groupOrderNumber)
    console.log(newNoteGroup)

    this.noteService.createNoteGroup(newNoteGroup).subscribe(
      result => {
        location.reload()
      }
    )
  }
}
