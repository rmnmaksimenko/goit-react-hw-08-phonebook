import PropTypes from 'prop-types';

import { ListEl, ContactEl } from './contactlist.styled';
const Contact = props => {
  const { id, username, number } = props;
  return (
    <ListEl key={id}>
      <span>
        {username}: {number}
      </span>
      <ContactEl
        type="button"
        onClick={() => {
          this.props.onDelete(id);
        }}
      >
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
};
