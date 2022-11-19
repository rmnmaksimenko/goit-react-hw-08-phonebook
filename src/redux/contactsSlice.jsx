import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const initialState = { contacts: [], isloading: false, error: null };

const tasksSliceReducers = {
  [fetchContacts.pending](state, _) {
    state.isloading = true;
    state.error = null;
  },
  [addContacts.pending](state, _) {
    state.isloading = true;
    state.error = null;
  },
  [deleteContacts.pending]: (state, _) => {
    state.isloading = true;
    state.error = null;
  },
  [fetchContacts.fulfilled](state, action) {
    state.isloading = false;
    state.error = null;
    state.contacts = action.payload;
  },
  [addContacts.fulfilled]: (state, action) => {
    state.contacts.push(action.payload);
    state.error = null;
    state.isloading = false;
  },
  [deleteContacts.fulfilled]: (state, action) => {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
    state.isloading = false;
  },
  [fetchContacts.rejected](state, action) {
    state.isloading = false;
    state.error = action.payload;
  },
  [addContacts.rejected](state, action) {
    state.isloading = false;
    state.error = action.payload;
  },
  [deleteContacts.rejected](state, action) {
    state.isloading = false;
    state.error = action.payload;
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: tasksSliceReducers,
});

export const contactsReducer = contactsSlice.reducer;
