import 'index.css';
import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './app.styled';
import ContactForm from './contactform';
import ContactList from './contactlist';
import Filter from './filter';

const STORAGE = 'contactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ username, number, id }) => {
    const { contacts } = this.state;
    const userInContacts = contacts.findIndex(contact => contact.username.toLowerCase() === username.toLowerCase());
    if (userInContacts !== -1) {
      alert(`${username} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: id,
          username: username,
          number: number,
        },
      ],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = value => {
    this.setState({ filter: value ? value : '' });
  };

  filteredContacts() {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseFilter));
  }

  componentDidMount() {
    const storageContacts = localStorage.getItem(STORAGE);
    if (storageContacts) {
      this.setState({ contacts: JSON.parse(storageContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(STORAGE, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterID = shortid.generate();
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <div>
          <p>Contacts</p>
          <Filter id={filterID} onChangeFilter={this.onChangeFilter} value={filter} />
          {!this.state.contacts.length ? <p>You have no friends 😥</p> : ''}
          <ContactList contacts={this.filteredContacts()} onDelete={this.deleteContact} />
        </div>
      </Container>
    );
  }
}
