import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contact from '../components/contacts/Contact';
import * as ContactsActions from '../actions/contacts';

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contactActions: bindActionCreators(ContactsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
