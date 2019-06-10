import reducer from './noteReducers';
import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles NEW_NOTE_PENDING', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles NEW_NOTE service call', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: { title: 'hi there', body: 'bye now' }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'hi there', body: 'bye now' }]
    });
  });
});
