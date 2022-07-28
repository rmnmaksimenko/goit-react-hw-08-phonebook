import { Form } from './contactform.styled';
import shortid from 'shortid';
import { Component } from 'react';
const usernameID = shortid.generate();
const numberID = shortid.generate();

class ContactForm extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, number } = this.state;
    const id = shortid.generate();
    const contact = { username, number, id };
    this.props.onSubmit(contact);
    e.currentTarget.reset();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
      </Form>
    );
  }
}

export default ContactForm;
