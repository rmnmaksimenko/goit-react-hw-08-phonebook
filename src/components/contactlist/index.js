import Contact from './contact';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redix/contactList';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactList.contacts);

  const onDelete = id => dispatch(deleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, username, number }) => (
        <Contact key={id} username={username} number={number} onDelete={() => onDelete(id)} />
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
