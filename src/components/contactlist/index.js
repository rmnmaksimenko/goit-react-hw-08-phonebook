import { Component } from 'react';
import Contact from './contact';
import { ContactEl, ListEl } from './contactlist.styled';

export default class ContactList extends Component {
  friendList() {
    return this.props.contacts.map(friend => {
      return (
        <Contact
          key={friend.id}
          id={friend.id}
          username={friend.username}
          number={friend.number}
        />
      );
    });
  }
  render() {
    return <ul>{this.friendList()}</ul>;
  }
}
