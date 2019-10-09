// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material';
import Spacer from '../common/material/Spacer';
import UserInfo from './UserInfo';
import AdditionalInfo from './AdditionalInfo';

class Contact extends Component<Props> {
  render() {
    const { classes, contacts, contactId } = this.props;
    const contact = contacts.value.find(c => {
      return c.id === contactId;
    });
    return (
      <div className={classes.contactContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <UserInfo contact={contact} />
          </Grid>
          <Grid item xs={12}>
            <Spacer size={20} />
          </Grid>
          <Grid item xs={12}>
            <AdditionalInfo contact={contact} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(materialStyles)(Contact);
