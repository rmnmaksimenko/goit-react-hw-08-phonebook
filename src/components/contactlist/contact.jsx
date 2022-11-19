import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { ListEl, DeleteBtn } from './contactlist.styled';
function Contact(props) {
  const { username, number, id } = props;
  const dispatch = useDispatch();
  // const onDelete = id => dispatch(deleteContact(id));
  const onDelete = id => {
    console.log(id);
    return dispatch(deleteContacts(id));
  };

  return (
    <ListEl>
      <span>
        {username}: {number}
      </span>
      <DeleteBtn
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </DeleteBtn>
    </ListEl>
  );
}

export default Contact;
Contact.propTypes = {
  username: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
