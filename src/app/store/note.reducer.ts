import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Note } from "../models/note";
import { addNote, getNote, removeNote } from "./note.actions";
export const initialState: Note[] = [];

export const notesReducer = createReducer(
    initialState,
    on(addNote, (state, { newNote }) => [...state, newNote]),
    on(getNote, (state) => state),
    on(removeNote, (state, { index }) => [...state.slice(0, index), ...state.slice(index + 1)]),
)