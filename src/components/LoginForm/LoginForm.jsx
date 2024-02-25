import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/auth/authSelectors';
import css from './LoginForm.module.css';

export const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectError);

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const body = { email, password };

    onSubmit(body);
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Email:
          <input
            className={css.input}
            type="email"
            name="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </label>
        <label className={css.label}>
          Password:
          <input
            className={css.input}
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=""
            required
            value={password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />
        </label>
        <button type="submit" className={css.button}>
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};
