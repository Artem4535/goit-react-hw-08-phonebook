import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>
        name
        <input onChange={handleOnChange} value={name} name="name" type="text" />
      </label>
      <br />
      <label>
        Email
        <input
          onChange={handleOnChange}
          value={email}
          name="email"
          type="mail"
        />
      </label>
      <br />
      <label>
        Password
        <input
          onChange={handleOnChange}
          value={password}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
