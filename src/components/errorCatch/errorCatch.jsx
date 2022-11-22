import { useSelector } from 'react-redux';
import { selectIsError } from 'redux/selectContacts';

export function ErrorCatch() {
  let isError = useSelector(selectIsError);
  try {
    if (isError.message) {
      isError = isError.message;
    }
  } catch (error) {}
  return isError;
}
