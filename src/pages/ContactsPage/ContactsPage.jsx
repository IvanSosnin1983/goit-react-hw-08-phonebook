import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Filter } from '../../components/Filter/Filter';
import { Form } from '../../components/Form/Form';
import { ContactList } from '../../components/ContactsList/ContactsList';

import { setFilter } from '../../redux/contacts/slice';
import {
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
  selectAllContacts,
} from '../../redux/contacts/selectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/operations';

const ContactsPage = () => {
  const allContacts = useSelector(selectAllContacts);
  const filteredContacs = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  console.log(allContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = deleteId => {
    dispatch(deleteContact(deleteId));
  };

  const onAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const filterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      {isLoading && <p>. . . Loading</p>}
      {error && <p>{error}</p>}
      {Boolean(filteredContacs.length) && (
        <ContactList contacts={filteredContacs} onDelete={onDeleteContact} />
      )}
    </div>
  );
};
export default ContactsPage;
