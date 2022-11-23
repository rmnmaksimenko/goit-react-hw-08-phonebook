import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { ListEl, DeleteBtn } from './contactlist.styled';
function Contact(props) {
  const { name, number, id } = props;
  const dispatch = useDispatch();
  // const onDelete = id => dispatch(deleteContact(id));
  const onDelete = id => {
    console.log(id);
    return dispatch(deleteContacts(id));
  };

  return (
    <ListEl>
      <span>
        {name}: {number}
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
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
