import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNoteService {
  notes: string[] = [];

  constructor() {}

  addNote(newNote: string) {
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
