import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleOnChange}
            name="email"
            value={email}
            type="mail"
          />
        </label>
        <br />
        <label>
          Password
          <input
            onChange={handleOnChange}
            name="password"
            value={password}
            type={passwordVisible ? 'text' : 'password'}
          />
        </label>
        <br />
        <button type="button" onClick={togglePasswordVisibility}>
          Меняем
        </button>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
