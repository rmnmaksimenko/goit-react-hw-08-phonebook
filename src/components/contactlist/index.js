import Contact from './contact';
import { useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter));
  };

  return (
    <ul>
      {filteredContacts().map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
