import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/login/Login';
import * as LoginActions from '../actions/auth';
import { authErrors, isAuthenticated } from '../reducers/index';

function mapStateToProps(state) {
  const { auth } = state;
  return {
    user: auth && auth.access ? auth.access : null,
    error: authErrors(state),
    isAuthenticated: isAuthenticated(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
