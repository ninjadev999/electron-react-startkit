// @flow
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import LeftSideBar from '../sidebars/LeftSideBar';
import { materialStyles } from '../../styles/material';
import Contacts from '../contacts/Contacts';

class Home extends Component {
  static defaultProps = {
    // auth: {},
    // isAuthenticated: false,
    // loginActions: {},
    // contactsActions: {},
    classes: {}
  };

  componentWillReceiveProps() {
    // if (!isAuthenticated) return <Redirect to="/login" />;
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <LeftSideBar />
        <main className={classes.content}>
          <Contacts />
        </main>
      </Fragment>
    );
  }
}

Home.propTypes = {
  // auth: PropTypes.objectOf(PropTypes.object),
  // isAuthenticated: PropTypes.bool,
  // loginActions: PropTypes.objectOf(PropTypes.object),
  // contactsActions: PropTypes.objectOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.object)
};

export default compose(withStyles(materialStyles))(Home);
