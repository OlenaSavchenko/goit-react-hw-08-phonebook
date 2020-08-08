import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Container from '../../components/Container';

class ContactsView extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
    isLoadingContacts: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          {this.props.isLoadingContacts && <h1>Loading...</h1>}
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}
export default ContactsView;
