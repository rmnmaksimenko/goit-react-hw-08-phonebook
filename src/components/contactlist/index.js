import Contact from './contact';
import { useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(state => state.contactList.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseFilter));
  };

  return (
    <ul>
      {filteredContacts().map(({ id, username, number }) => (
        <Contact key={id} id={id} username={username} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
