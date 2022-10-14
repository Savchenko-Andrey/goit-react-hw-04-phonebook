import { useState } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Section } from './App.styled'
import { Form } from './FormSection/Form';
import { Filter } from './FilterSection/Filter';
import { Renderlist } from './ListContact/ListContact';
import { ContactList } from './ListContact/ListContact.styled';
import { useLocalStorage } from './Hooks/LocalStoregeHook';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contact, setContact] = useLocalStorage('contact');


  const hendleSubmit = ({ name, number }) => {
    const item = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const inContact = contact.find(item => item.name === name);

    if (!inContact) {
      setContact(prev => [item, ...prev]);
    } else {
      Notiflix.Notify.warning(`${name} is already is contacts`);
    };
  };
  
  const removeBtn = e => {
    setContact(contact.filter(item => item.id !== e.currentTarget.name));
  };
  
  const renderFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const renderContact = () => {
    const contacts = contact;
    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  };

  const contacts = renderContact();

  return (
    <Section>
      <h1>Phonebook</h1>
      <Form onSubmit={hendleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilter={renderFilter} />
      <ContactList>
        <Renderlist onRemove={removeBtn} contact={contacts} />
      </ContactList>
    </Section>
  );
};
