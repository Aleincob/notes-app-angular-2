import { Injectable } from '@angular/core';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root'
})
export class AddNoteService {
  notes: Note[] = [];

  constructor() { }

  addNote(newNote: Note) {
    this.notes.push(newNote);
    console.log('recibido', newNote);

  }
  getNotes() {
    return this.notes;
  }
  removeNote(index: number) {
    this.notes.splice(index, 1);
  }
}
