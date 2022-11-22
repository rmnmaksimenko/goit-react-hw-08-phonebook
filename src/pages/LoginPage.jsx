export function LoginPage() {
  return (
    <form autoComplete="off">
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
