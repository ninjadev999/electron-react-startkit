import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DroplrScreen from './DroplrScreen';
import DroplrHeader from './DroplrHeader';

class DroplrHomeContainer extends Component {
  static defaultProps = {
    children: <div />,
    onChangeMenu: () => {}
  };

  render() {
    const { children, onChangeMenu } = this.props;

    return (
      <div id="droplr-home-container">
        <DroplrScreen Layout={DroplrHeader} onChangeMenu={onChangeMenu} />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

DroplrHomeContainer.propTypes = {
  children: PropTypes.element,
  onChangeMenu: PropTypes.func
};

export default DroplrHomeContainer;
