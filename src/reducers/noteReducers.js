import { NEW_NOTE, NEW_NOTE_PENDING } from '../actions/notesActions';

const initialState = {
  loading: true,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    case NEW_NOTE:
      return { ...state, loading: false, list: [...state.list, action.payload] }; 
    default:
      return state;
  }
}
