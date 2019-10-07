import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contacts from '../components/contacts/Contacts';
import * as ContactsActions from '../actions/contacts';

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
