import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';

import { setFilter } from '../redux/contacts/slice';
import {
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

export const App = () => {
  // const filteredContacs = useSelector(selectFilteredContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const onDeleteContact = deleteId => {
  //   dispatch(deleteContact(deleteId));
  // };

  // const onAddContact = (name, number) => {
  //   dispatch(addContact({ name, number }));
  // };

  // const filterChange = ({ target }) => {
  //   dispatch(setFilter(target.value));
  // };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      {/* <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      {isLoading && <p>. . . Loading</p>}
      {error && <p>{error}</p>}
      {Boolean(filteredContacs.length) && (
        <ContactList contacts={filteredContacs} onDelete={onDeleteContact} />
      )} */}
    </Routes>
  );
};
