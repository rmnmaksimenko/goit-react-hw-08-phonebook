import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const STORAGE = 'contactList';
// const initialState = {
//   contacts: JSON.parse(window.localStorage.getItem(STORAGE) ?? []),
// };

const initialState = [
  { id: 'id-1', username: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', username: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', username: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', username: 'Annie Copeland', number: '227-91-26' },
];

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState: { contacts: initialState },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      // return state;
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
