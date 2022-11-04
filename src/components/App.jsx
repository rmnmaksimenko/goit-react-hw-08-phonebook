import 'index.css';
import { useSelector } from 'react-redux';
import { Container } from './app.styled';
import ContactForm from './contactform';
import ContactList from './contactlist';
import Filter from './filter';
// import useLocalStorage from 'hooks/uselocalstorage';

export const STORAGE = 'contactList';

export function App() {
  const contacts = useSelector(state => state.contactList.contacts);
  const contactsLength = contacts ? contacts.length : 0;

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <p>Contacts</p>
        <Filter />
        {!contactsLength ? <p>You have no friends 😥</p> : ''}
        <ContactList />
      </div>
    </Container>
  );
}
