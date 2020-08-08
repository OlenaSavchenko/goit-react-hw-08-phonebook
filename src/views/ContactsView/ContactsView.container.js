import { connect } from 'react-redux';
import ContactsView from './ContactsView';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
