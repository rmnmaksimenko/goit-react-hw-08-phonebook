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
    <form autoComplete="off" onSubmit={handleSubmit}>
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
      <button type="submit">Log in</button>
    </form>
  );
}
