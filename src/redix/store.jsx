import { configureStore } from '@reduxjs/toolkit';
import contactListSlice from './contactList';
import filterSlice from './filter';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    contactList: contactListSlice,
  },
});
