import { AddContactBtn, Form } from 'components/contactform/contactform.styled';
import { Container } from 'components/ContactsPage/app.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(login({ email: form.elements.email.value, password: form.elements.password.value }));
    form.reset();
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <br />
          <input type="email" name="email" />
          <br />
        </label>
        <label>
          Password
          <br />
          <input type="password" name="password" />
          <br />
        </label>
        <AddContactBtn type="submit">Log in</AddContactBtn>
      </Form>
    </Container>
  );
}
