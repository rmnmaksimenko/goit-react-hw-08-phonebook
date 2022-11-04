import 'index.css';
import { Container } from './app.styled';
import ContactForm from './contactform';
import ContactList from './contactlist';
import Filter from './filter';
import useLocalStorage from 'hooks/uselocalstorage';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const STORAGE = 'contactList';

export function App() {
  const [contacts, setContacts] = useLocalStorage(STORAGE, []);

  const filter = useSelector(state => state.filter.value);

  function filteredContacts() {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseFilter));
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <p>Contacts</p>
        <Filter />
        {!contacts.length ? <p>You have no friends 😥</p> : ''}
        <ContactList />
      </div>
    </Container>
  );
}
