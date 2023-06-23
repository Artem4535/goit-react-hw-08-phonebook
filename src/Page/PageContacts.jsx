import Contacts from 'components/Contacts/ContactsList';
import Filter from 'components/Filter/Filter';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const PageContacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <FormAddContact />
      <Filter />
      <Contacts />
    </>
  );
};

export default PageContacts;
