import axios from 'axios';

// const BASE_URL = 'https://6374e98848dfab73a4eca059.mockapi.io/';

export async function addContact(contact) {
  return await axios.post(`contacts`, contact);
}

export async function deleteContact(id) {
  return await axios.delete(`contacts/${id}`);
}

export async function getContacts() {
  return await axios.get(`contacts`);
}
