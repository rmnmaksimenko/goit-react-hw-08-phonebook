import PropTypes from 'prop-types';

export default function Filter({ onChangeFilter }) {
  const changeFilter = e => {
    const value = e.currentTarget.value;
    onChangeFilter(value);
  };
  return (
    <label>
      Find Contacts by name
      <br />
      <input type="text" name="filter" onChange={changeFilter} autoComplete="off" />
    </label>
  );
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
