import { createAction, props } from '@ngrx/store';
import { Note } from '../models/note';

export const addNote = createAction('[Notes] add Note', props<{ newNote: Note }>());
export const getNote = createAction('[Notes] get Note');
export const removeNote = createAction('[Notes] remove Note', props<{ index: number }>());