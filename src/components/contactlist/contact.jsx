import PropTypes from 'prop-types';
import { ListEl, ContactEl } from './contactlist.styled';
const Contact = props => {
  const { id, username, number, onDelete } = props;
  return (
    <ListEl key={id}>
      <span>
        {username}: {number}
      </span>
      <ContactEl type="button" onClick={onDelete}>
        Удалить
      </ContactEl>
    </ListEl>
  );
};

export default Contact;
Contact.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
