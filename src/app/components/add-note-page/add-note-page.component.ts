import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddNoteService } from 'src/app/add-note.service';
import { Note } from 'src/app/models/note';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private addNoteService: AddNoteService, private router: Router) { }


  addNote() {
    const newNote: Note = {
      title: this.noteForm.value.title ?? '',
      text: this.noteForm.value.text ?? '',
    };
    this.addNoteService.addNote(newNote)
    this.router.navigateByUrl('/')
  }
}
