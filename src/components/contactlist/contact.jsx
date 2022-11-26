import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectContacts';
import { ListEl, DeleteBtn } from './contactlist.styled';
function Contact(props) {
  const { name, number, id } = props;
  const dispatch = useDispatch();
  const onDelete = id => {
    return dispatch(deleteContacts(id));
  };
  const isLoading = useSelector(selectIsLoading);

  return (
    <ListEl>
      <span>
        {name}: {number}
      </span>
      <DeleteBtn
        type="button"
        disabled={isLoading}
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
