import { createSlice } from '@reduxjs/toolkit';
import { STORAGE } from 'components/App';
const initialState = {
  contacts: JSON.parse(window.localStorage.getItem(STORAGE) ?? []),
};

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact } = contactListSlice.actions;

export default contactListSlice.reducer;
