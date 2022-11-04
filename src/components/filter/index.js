import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find Contacts by name
      <br />
      <input type="text" name="filter" value={value} onChange={changeFilter} autoComplete="off" />
    </label>
  );
}
