import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';

import { AddNoteService } from '../../add-note.service';

@Component({
  selector: 'app-box-note',
  templateUrl: './box-note.component.html',
  styleUrls: ['./box-note.component.css'],
})
export class BoxNoteComponent implements OnInit {
  notes: Note[] = this.addNoteService.getNotes();
  query: string = '';
  notesFiltered: Note[] = [];
  constructor(private addNoteService: AddNoteService) { }

  ngOnInit() {
    this.search()
  }
  removeNote(index: number) {
    this.addNoteService.removeNote(index);
  }
  search() {
    this.notesFiltered = this.notes.filter((note) => note.title.includes(this.query))
  }
}

