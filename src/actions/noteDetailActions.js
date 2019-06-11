import { createAction } from 'promise-middleware-redux';
import { getNote } from '../services/notesApi';

export const [
  noteById,
  GET_NOTE,
  GET_NOTE_PENDING
] = createAction('GET_NOTE', getNote);
