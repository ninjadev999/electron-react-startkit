// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Home extends Component<Props> {
  static defaultProps = {
    // auth: {},
    isAuthenticated: false,
    // loginActions: {},
    // contactsActions: {},
    classes: {}
  };

  render() {
    const { isAuthenticated, classes } = this.props;

    if (!isAuthenticated) return <Redirect to="/login" />;

    return (
      <div className={classes.container} data-tid="container">
        <h2>Home</h2>
      </div>
    );
  }
}

Home.propTypes = {
  // auth: PropTypes.objectOf(PropTypes.object),
  isAuthenticated: PropTypes.bool,
  // loginActions: PropTypes.objectOf(PropTypes.object),
  // contactsActions: PropTypes.objectOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.object)
};
