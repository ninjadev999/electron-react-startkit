// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ContactsTable from './ContactsTable';
import { materialStyles } from '../../styles/material';

class Contacts extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.pageTitle}>How to create idea for SaaS?</div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.taleTitle}>Registrats</div>
        </Grid>
        <Grid item xs={12}>
          <ContactsTable />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(materialStyles)(Contacts);
