import { Form, AddContactBtn } from './contactform.styled';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redix/contactList';

function ContactForm() {
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useLocalStorage(STORAGE, []);
  const contactsName = useSelector(state => state.contactList.contacts);
  console.log(contactsName);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = shortid.generate();
    const newContact = { username: name, number, id };
    // onSubmit(contact);
    const userInContacts = contactsName.findIndex(
      contact => contact.username.toLowerCase() === newContact.username.toLowerCase()
    );
    if (userInContacts !== -1) {
      alert(`${newContact.username} is already in contacts`);
      return;
    }

    console.log(newContact);
    // setContacts([...contacts, newContact]);
    dispatch(addContact(newContact));
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="username"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
