import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Notegroup } from '../../data/schema/notegroup';
import { Note } from '../../data/schema/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  private noteGroupUrl = '/notegroup'
  private noteUrl = '/note'
  private createUrl = '/create'
  private setCompletedUrl = "/set-completed"
  private editText ="/edit-text"
  private deleteUrl ="/delete"
  
  //#region NoteGroup functions
  createNoteGroup(noteGroup: Notegroup) {
    return this.http.post(environment.apiUrl + this.noteGroupUrl + this.createUrl, noteGroup, { responseType: 'text' })
  }

  setNoteGroupCompleted(noteGroupId: number, completed: boolean) {
    return this.http.put(environment.apiUrl + this.noteGroupUrl + "/" + noteGroupId + this.setCompletedUrl, completed, { responseType: 'text' })
  }

  editNoteGroupText(noteGroupId: number, text: string) {
    return this.http.put(environment.apiUrl + this.noteGroupUrl + "/" + noteGroupId + this.editText, text, { responseType: 'text' })
  }

  deleteNoteGroup(noteGroupId: number) {
    return this.http.delete(environment.apiUrl + this.noteGroupUrl + "/" + noteGroupId + this.deleteUrl, { responseType: 'text' })
  }
  //#endregion

  //#region Note functions
  createNote(note: Note) {
    return this.http.post(environment.apiUrl + this.noteUrl + this.createUrl, note, { responseType: 'text' })
  }

  setNoteCompleted(noteId: number, completed: boolean) {
    return this.http.put(environment.apiUrl + this.noteUrl + "/" + noteId + this.setCompletedUrl, completed, { responseType: 'text' })
  }

  editNoteText(noteId: number, text: string) {
    return this.http.put(environment.apiUrl + this.noteUrl + "/" + noteId + this.editText, text, { responseType: 'text' })
  }

  deleteNote(noteId: number) {
    return this.http.delete(environment.apiUrl + this.noteUrl + "/" + noteId + this.deleteUrl, { responseType: 'text' })
  }
  //#endregion
}
