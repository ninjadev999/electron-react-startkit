import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import * as ProfileActions from '../actions/profile';

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
