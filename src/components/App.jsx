import 'index.css';
import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './app.styled';
import ContactForm from './contactform';
import ContactList from './contactlist';
import Filter from './filter';
import useLocalStorage from 'hooks/uselocalstorage';
import { useState } from 'react';

const STORAGE = 'contactList';

export function App() {
  const [contacts, setContacts] = useLocalStorage(STORAGE, []);
  const [filter, SetFilter] = useState('');

  const addContact = ({ username, number, id }) => {
    const userInContacts = contacts.findIndex(contact => contact.username.toLowerCase() === username.toLowerCase());
    if (userInContacts !== -1) {
      alert(`${username} is already in contacts`);
      console.log(123);
      return;
    }
    setContacts([...contacts, { username, number, id }]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onChangeFilter = value => {
    SetFilter(value);
  };

  function filteredContacts() {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseFilter));
  }

  const filterID = shortid.generate();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <div>
        <p>Contacts</p>
        <Filter id={filterID} onChangeFilter={onChangeFilter} value={filter} />
        {!contacts.length ? <p>You have no friends 😥</p> : ''}
        <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
      </div>
    </Container>
  );
}
