import 'index.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading } from 'redux/selectContacts';
import { Container } from './app.styled';
import ContactForm from './contactform';
import ContactList from './contactlist';
import { ErrorCatch } from './errorCatch/errorCatch';
import Filter from './filter';
export const STORAGE = 'contactList';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = ErrorCatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contactsLength = contacts ? contacts.length : 0;
  console.log(isLoading);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <Filter />
        {isLoading ? <p>Loading tasks...</p> : isError ? <p>{isError}</p> : <p>Contacts</p>}
        {!contactsLength ? !isLoading ? !isError ? <p>You have no friends 😥</p> : '' : '' : ''}
        <ContactList />
      </div>
    </Container>
  );
}
