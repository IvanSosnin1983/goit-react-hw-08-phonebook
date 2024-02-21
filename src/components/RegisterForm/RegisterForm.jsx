import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/auth/authSelectors';

export const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleInputChange = e => {
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
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const body = { name, email, password };

    onSubmit(body);
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoading && <p>. . . Loading</p>}

      <form
        onSubmit={handleSubmit}
        //  className={css.form}
      >
        <label
        //   className={css.label}
        >
          Name:
          <input
            //   className={css.input}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />
        </label>
        <label
        //   className={css.label}
        >
          Email:
          <input
            //   className={css.input}
            type="email"
            name="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </label>
        <label

        //   className={css.label}
        >
          Password:
          <input
            //   className={css.input}
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
        <button
          type="submit"
          //   className={css.button}
        >
          Register
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};
