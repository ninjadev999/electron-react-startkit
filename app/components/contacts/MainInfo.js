// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material';

class MainInfo extends Component<Props> {
  render() {
    const { classes, contact } = this.props;
    return (
      <Grid container>
        <Grid item xs={6} className={clsx(classes.tabGridItem)}>
          <div className={clsx(classes.tabTextDescription)}>PHONE</div>
          <div className={clsx(classes.tabText)}>{contact.phone}</div>
        </Grid>
        <Grid item xs={6} className={clsx(classes.tabGridItem)}>
          <div className={clsx(classes.tabTextDescription)}>IP ADDRESS</div>
          <div className={clsx(classes.tabText)}>{contact.ip_address}</div>
        </Grid>
        <Grid item xs={6} className={clsx(classes.tabGridItem)}>
          <div className={clsx(classes.tabTextDescription)}>COUNTRY</div>
          <div className={clsx(classes.tabText)}>{contact.country}</div>
        </Grid>
        <Grid item xs={6} className={clsx(classes.tabGridItem)}>
          <div className={clsx(classes.tabTextDescription)}>
            TIME ON WEBINAR
          </div>
          <div className={clsx(classes.tabText)}>{contact.time_on_webinar}</div>
        </Grid>
        <Grid item xs={6} className={clsx(classes.tabGridItem)}>
          <div className={clsx(classes.tabTextDescription)}>LTV</div>
          <div className={clsx(classes.tabText)}>{`$${contact.ltv}`}</div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(materialStyles)(MainInfo);
