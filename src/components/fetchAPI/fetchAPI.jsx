import axios from 'axios';

const BASE_URL = 'https://6374e98848dfab73a4eca059.mockapi.io/';

export async function addContact(contact) {
  return await axios.post(`${BASE_URL}contacts`, contact);
}

export async function deleteContact(id) {
  return await axios.delete(`${BASE_URL}contacts`, id);
}

export async function getContacts() {
  return await axios.get(`${BASE_URL}contacts`);
}
