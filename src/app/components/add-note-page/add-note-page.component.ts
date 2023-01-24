import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { addNote } from 'src/app/store/note.actions';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.css']
})
export class AddNotePageComponent {
  noteForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required])
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) { }


  addNote() {
    const newNote: Note = {
      title: this.noteForm.value.title ?? '',
      text: this.noteForm.value.text ?? '',
    };
    this.store.dispatch(addNote({ newNote }))
    this.router.navigateByUrl('/')
  }
}
