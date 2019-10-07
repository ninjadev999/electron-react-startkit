import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DroplrScreen from './DroplrScreen';
import DroplrHeader from './DroplrHeader';
import { materialStyles } from '../../styles/material/index';

class DroplrContainer extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { children, classes } = this.props;

    return (
      <Fragment>
        <DroplrScreen Layout={DroplrHeader} />
        <div id="droplr-container" className={classes.droplrContainer}>
          {children}
        </div>
      </Fragment>
    );
  }
}

DroplrContainer.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.objectOf(PropTypes.object)
};

export default withStyles(materialStyles)(DroplrContainer);
