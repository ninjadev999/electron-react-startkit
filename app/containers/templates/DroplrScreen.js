import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class DroplrScreen extends React.Component<Props> {
  static defaultProps = {
    member: {},
    auth: {},
    memberLogout: () => {}
  };

  render() {
    const { Layout, member, auth, memberLogout, children } = this.props;

    return (
      <Layout member={member} auth={auth} logout={memberLogout}>
        {children}
      </Layout>
    );
  }
}

DroplrScreen.propTypes = {
  Layout: PropTypes.element.isRequired,
  member: PropTypes.objectOf(PropTypes.object),
  auth: PropTypes.objectOf(PropTypes.object),
  memberLogout: PropTypes.func,
  children: PropTypes.element.isRequired
};

const mapStateToProps = state => ({
  member: state.member || {},
  auth: state.auth || {}
});

const mapDispatchToProps = {
  memberLogout: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DroplrScreen);
