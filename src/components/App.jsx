import 'index.css';
import { Container } from './app.styled';
import ContactForm from './contactform';
import ContactList from './contactlist';
import Filter from './filter';
import useLocalStorage from 'hooks/uselocalstorage';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const STORAGE = 'contactList';

export function App() {
  const [contacts, setContacts] = useLocalStorage(STORAGE, []);
  console.log(useSelector(state => state.contactList.value));
  // const contacts = useSelector(state => state.contactList);
  // console.log(contacts);
  const filter = useSelector(state => state.filter.value);

  const addContact = ({ username, number, id }) => {
    const userInContacts = contacts.findIndex(contact => contact.username.toLowerCase() === username.toLowerCase());
    if (userInContacts !== -1) {
      alert(`${username} is already in contacts`);
      return;
    }
    setContacts([...contacts, { username, number, id }]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  function filteredContacts() {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseFilter));
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <div>
        <p>Contacts</p>
        <Filter />
        {!contacts.length ? <p>You have no friends 😥</p> : ''}
        <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
      </div>
    </Container>
  );
}
