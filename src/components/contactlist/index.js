import Contact from './contact';

const ContactList = ({ contacts, onDelete }) => {
  const friendList = () => {
    return contacts.map(({ id, username, number }) => {
      return (
        <Contact
          key={id}
          id={id}
          username={username}
          number={number}
          onDelete={() => onDelete(id)}
        />
      );
    });
  };
  return <ul>{friendList()}</ul>;
};

export default ContactList;
