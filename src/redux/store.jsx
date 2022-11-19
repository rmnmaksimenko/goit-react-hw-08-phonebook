import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({}),
});

// export const selectContacts = state => state.contacts.contacts;
