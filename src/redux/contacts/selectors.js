import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => store.contacts.contacts.items;
export const selectIsLoading = store => store.contacts.contacts.isLoading;
export const selectError = store => store.contacts.contacts.error;

export const selectFilter = store => store.contacts.filter;
export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.trim().toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }
);
