import { Component, OnInit } from '@angular/core';

import { AddNoteService } from '../../add-note.service';

@Component({
  selector: 'app-box-note',
  templateUrl: './box-note.component.html',
  styleUrls: ['./box-note.component.css'],
})
export class BoxNoteComponent implements OnInit {
  names: string[] = this.addNoteService.getNotes();

  constructor(private addNoteService: AddNoteService) {}

  ngOnInit() {}
  removeNote(index: number) {
    this.addNoteService.removeNote(index);
  }
}
