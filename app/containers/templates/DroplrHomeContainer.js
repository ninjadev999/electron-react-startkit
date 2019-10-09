import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material/index';

class DroplrHomeContainer extends Component {
  static defaultProps = {
    children: <div />,
    classes: {}
  };

  render() {
    const { children, classes } = this.props;

    return (
      <Fragment>
        <div id="droplr-container" className={[classes.droplrContainer]}>
          {children}
        </div>
      </Fragment>
    );
  }
}

DroplrHomeContainer.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.objectOf(PropTypes.object)
};

export default withStyles(materialStyles)(DroplrHomeContainer);
