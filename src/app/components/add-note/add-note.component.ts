import { Component, OnInit } from '@angular/core';

import { AddNoteService } from '../../add-note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  note: string = '';

  constructor(private addNoteService: AddNoteService) { }

  ngOnInit() { }
  addNote() {
    this.addNoteService.addNote({
      title: 'Title',
      text: this.note
    });
  }
}
