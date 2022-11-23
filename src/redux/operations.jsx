import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact } from 'components/fetchAPI/fetchAPI';
import axios from 'axios';
// axios.defaults.baseURL = 'https://6374e98848dfab73a4eca059.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchContact', async (_, thunkAPI) => {
  try {
    const response = await axios.get('contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContacts = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await deleteContact(id);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addContacts = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await addContact(contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
