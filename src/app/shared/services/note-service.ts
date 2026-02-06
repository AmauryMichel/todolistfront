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
  
  createNoteGroup(noteGroup: Notegroup) {
    return this.http.post(environment.apiUrl + this.noteGroupUrl + this.createUrl, noteGroup, { responseType: 'text' })
  }
}
