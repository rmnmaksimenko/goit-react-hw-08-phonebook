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
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" />
        Username
        <br />
      </label>
      <label>
        <input type="email" name="email" />
        Email
        <br />
      </label>
      <label>
        <input type="password" name="password" />
        Password
        <br />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
