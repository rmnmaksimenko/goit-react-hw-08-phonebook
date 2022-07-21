import 'index.css';
import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './app.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', username: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', username: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', username: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', username: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    username: '',
    number: '',
  };
  idGenerate() {
    return shortid.generate();
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, number, contacts } = this.state;
    const userInContacts = contacts.findIndex(
      contact => contact.username.toLowerCase() === username.toLowerCase()
    );
    if (userInContacts !== -1) {
      alert(`${username} is already in contacts`);
      return;
    }
    contacts.push({
      id: this.idGenerate(),
      username: username,
      number: number,
    });
    e.currentTarget.reset();
    this.forceUpdate();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts() {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.username.toLowerCase().includes(lowerCaseFilter)
    );
  }

  friendList() {
    return this.filteredContacts().map(friend => {
      return (
        <li key={friend.id}>
          <span>
            {friend.username}: {friend.number}
          </span>
        </li>
      );
    });
  }
  render() {
    const usernameID = this.idGenerate();
    const numberID = this.idGenerate();
    const filterID = this.idGenerate();
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={usernameID}>
            Name
            <br />
            <input
              id={usernameID}
              type="text"
              name="username"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label htmlFor={numberID}>
            Number
            <br />
            <input
              id={numberID}
              type="tel"
              name="number"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <p>Contacts</p>
          <label htmlFor={filterID}>
            Find Contacts by name
            <br />
            <input
              id={filterID}
              type="text"
              name="filter"
              onChange={this.changeFilter}
            />
          </label>

          <br />
          {!this.state.contacts.length ? <p>You have no friends 😥</p> : ''}
          <ul>{this.friendList()}</ul>
        </div>
      </Container>
    );
  }
}
