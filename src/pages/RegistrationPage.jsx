import { AddContactBtn, Form } from 'components/contactform/contactform.styled';
import { Container } from 'components/ContactsPage/app.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export function RegistrationPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <Container>
      <Form autoComplete="false" onSubmit={handleSubmit}>
        {/* <input autocomplete="false" name="hidden" type="text" style={{ display: 'none' }}></input> */}
        <label>
          Email
          <br />
          <input type="email" name="email" autoComplete="off" required />
          <br />
        </label>
        <label>
          Username
          <br />
          <input type="text" name="name" autoComplete="off" required />
          <br />
        </label>
        <label>
          Password
          <br />
          <input
            type="password"
            autoComplete="new-password"
            pattern=".{7,}"
            title="Seven or more characters"
            name="password"
            required
          />
          <br />
        </label>
        <AddContactBtn type="submit">Sign up</AddContactBtn>
      </Form>
    </Container>
  );
}
