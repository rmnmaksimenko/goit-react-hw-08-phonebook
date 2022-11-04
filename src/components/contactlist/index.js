import Contact from './contact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactListSlice';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactList.contacts);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseFilter));
  };

  const onDelete = id => dispatch(deleteContact(id));
  return (
    <ul>
      {filteredContacts().map(({ id, username, number }) => (
        <Contact key={id} username={username} number={number} onDelete={() => onDelete(id)} />
      ))}
    </ul>
  );
}

export default ContactList;
