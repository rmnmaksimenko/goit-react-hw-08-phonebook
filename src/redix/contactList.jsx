import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const STORAGE = 'contactList';
const initialState = {
  contacts: JSON.parse(window.localStorage.getItem(STORAGE) ?? []),
};

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistconfig = {
  key: 'contactList',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, deleteContact } = contactListSlice.actions;

export default contactListSlice.reducer;

export const persistedContactListReducer = persistReducer(persistconfig, contactListSlice.reducer);
