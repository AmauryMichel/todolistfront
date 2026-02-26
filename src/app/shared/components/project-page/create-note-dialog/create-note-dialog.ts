import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NoteService } from '../../../services/note-service';
import { Notegroup } from '../../../../data/schema/notegroup';
import { Note } from '../../../../data/schema/note';
import { User } from '../../../../data/schema/user';

@Component({
  selector: 'app-create-note-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-note-dialog.html',
  styleUrl: './create-note-dialog.css',
})
export class CreateNoteDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: { notegroup: Notegroup },
    private noteService: NoteService,
  ) {}

  noteForm = new FormGroup({
    text: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  })

  protected createGroup() {
    let author: User = JSON.parse(localStorage.getItem("user") || '')
    let text = this.noteForm.getRawValue().text
    let noteOrderNumber = this.data.notegroup.notes.length || 0
    let newNote: Note = new Note(author, this.data.notegroup, text, noteOrderNumber)
    console.log(newNote)

    this.noteService.createNote(newNote).subscribe(
      result => {
        location.reload()
      }
    )
  }
}
