// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material';
import {
  PrimaryButton,
  SecondaryButton
} from '../common/material/CustomButtons';

class UserInfo extends Component<Props> {
  render() {
    const { contact, classes } = this.props;
    return (
      <div className={classes.contactUserInfoContainer}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Avatar className={clsx(classes.contactUserAvatar)}>AT</Avatar>
          </Grid>
          <Grid item xs={12}>
            <div className={clsx(classes.contactUserName)}>{contact.name}</div>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <PrimaryButton variant="contained">Invite</PrimaryButton>
              </Grid>
              <Grid item>
                <SecondaryButton variant="contained" color="secondary">
                  Cancel
                </SecondaryButton>
              </Grid>
              <Grid item>
                <SecondaryButton variant="contained" color="secondary">
                  Delete
                </SecondaryButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(materialStyles)(UserInfo);
