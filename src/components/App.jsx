import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Section } from './App.styled'
import { Formes } from './FormSection/Form';
import { Filter } from './FilterSection/Filter';
import { Renderlist } from './ListContact/ListContact';
import { ContactList } from './ListContact/ListContact.styled';

export class App extends Component {
  state = {
    contact: [],
    filter: '',
  };
  
  componentDidMount() {
    const contact = localStorage.getItem('contact');
    const parsedContact = JSON.parse(contact);
    if (parsedContact) {
      this.setState({contact: parsedContact })
    };
  };

  componentDidUpdate( prevProps, prevState) {
    if (this.state.contact !== prevState.contact) {
      localStorage.setItem('contact', JSON.stringify(this.state.contact))
    };
  };

  hendleSubmit = ({ name, number }) => {
    const { contact } = this.state;
    const item = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const inContact = contact.find(item => item.name === name);
    if (!inContact) {
      return this.setState(({ contact }) => ({
        contact: [item, ...contact],
      }))
    }
       Notiflix.Notify.warning(`${name} is already is contacts`)

    
    
  };
  removeBtn = e => {
    const { contact } = this.state;
    this.setState({
      contact: contact.filter(item => item.id !== e.currentTarget.name),
    });
  };
  renderFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  renderContact = () => {
    const { contact, filter } = this.state;
    return contact.filter(item => item.name.toLowerCase().includes(filter));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.renderContact();
    return (
      <Section>
        <h1>Phonebook</h1>
        <Formes onSubmit={this.hendleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.renderFilter} />
        <ContactList>
          <Renderlist onRemove={this.removeBtn} contact={contacts} />
        </ContactList>
      </Section>
    );
  }
}
