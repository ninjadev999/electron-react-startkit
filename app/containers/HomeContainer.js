// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home/Home';
import * as LoginActions from '../actions/auth';
import * as ContactsActions from '../actions/contacts';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    isAuthorized: state.auth.isAuthorized
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(LoginActions, dispatch),
    contactsActions: bindActionCreators(ContactsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
