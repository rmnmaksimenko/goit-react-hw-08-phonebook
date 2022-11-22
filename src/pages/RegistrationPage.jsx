export function RegistrationPage() {
  return (
    <form autoComplete="off">
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
