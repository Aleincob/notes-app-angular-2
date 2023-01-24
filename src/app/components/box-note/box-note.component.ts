import { Component, OnInit } from '@angular/core';

import { Note } from 'src/app/models/note';
import { Store } from '@ngrx/store';
import { getNote, removeNote } from 'src/app/store/note.actions';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-box-note',
  templateUrl: './box-note.component.html',
  styleUrls: ['./box-note.component.css'],
})
export class BoxNoteComponent implements OnInit {
  notesFiltered: Note[] = [];
  notes$: Observable<Note[]>
  constructor(private store: Store<{ notes: Note[] }>) {
    this.notes$ = store.select('notes');
  }

  ngOnInit() {
  }
  removeNote(index: number) {
    this.store.dispatch(removeNote({ index }))
  }
}

