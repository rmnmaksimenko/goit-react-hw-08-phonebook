// import 'index.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading } from 'redux/selectContacts';
import { Container } from '../components/ContactsPage/app.styled';
import ContactForm from '../components/contactform';
import ContactList from '../components/contactlist';
import { ErrorCatch } from '../components/errorCatch/errorCatch';
import Filter from '../components/filter';
export const STORAGE = 'contactList';

export function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = ErrorCatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contactsLength = contacts ? contacts.length : 0;
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
