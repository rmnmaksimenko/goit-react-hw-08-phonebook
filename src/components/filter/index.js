import { Component } from 'react';

export default class Filter extends Component {
  changeFilter = e => {
    const value = e.currentTarget.value;
    this.props.onChangeFilter(value);
  };
  render() {
    const { id } = this.props;
    return (
      <label htmlFor={id}>
        Find Contacts by name
        <br />
        <input
          id={id}
          type="text"
          name="filter"
          onChange={this.changeFilter}
          autoComplete="off"
        />
      </label>
    );
  }
}
