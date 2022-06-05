import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'quotes',
  initialState: {
    1: {
      id: 1,
      text: 'No One Would Do Such Things',
      author: 'Churchill'
    },
    2: {
      id: 2,
      text: 'One can go to war alone, but you can\'t build peace alone',
      author: 'Chirac'
    },
    3: {
      id: 3,
      text: 'The true sign of intelligence is not knowledge but imagination.',
      author: 'Einstein'
    }
  },
  reducers: {
    addQuote(state, {payload}) {
      const {text, author} = payload;
      const newId = Math.max.apply(null, Object.keys(state)) + 1;
      state[newId] = {id: newId, text, author};
    },
    removeQuote(state, {payload}) {
      delete state[payload.id];
    }
  }
});

export const quotesActions = slice.actions;
export default slice.reducer;