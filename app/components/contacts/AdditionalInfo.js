import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// // import Tabs from '@material-ui/core/Tabs';
// // import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Badge from '@material-ui/core/Badge';
import { Tabs, Nav, Content } from 'react-tiny-tabs';
import { withStyles } from '@material-ui/core/styles';
import MainInfo from './MainInfo';
import { materialStyles } from '../../styles/material';

class AdditionalInfo extends Component<Props> {
  render() {
    const { contact, classes } = this.props;
    return (
      <div className={classes.contactAdditionalInfoContainer}>
        <Tabs className="theme-default">
          <Nav>
            <div className={classes.tabTitle}>Main Info</div>
            <div className={classes.tabTitle}>History</div>
            <div className={classes.tabTitle}>Messages 2</div>
          </Nav>
          <Content>
            <div>
              <MainInfo contact={contact} />
            </div>
            <div>
              <img
                className="img-left"
                src="https://rawgit.com/nashio/react-tiny-tabs/demo-page/examples/demo/page/assets/img/tuftedtitmouse.svg"
                alt="pic"
              />
              <p>
                The tufted titmouse (Baeolophus bicolor) is a small songbird
                from North America, a species in the tit and chickadee family
                (Paridae). The black-crested titmouse, found from central and
                southern Texas southwards, was included as a subspecies but is
                now considered a separate species B. atricristatus.
              </p>
            </div>
            <div>
              <img
                className="img-left"
                src="https://rawgit.com/nashio/react-tiny-tabs/demo-page/examples/demo/page/assets/img/bluebird.svg"
                alt="pic"
              />
              <p>
                The bluebirds are a group of medium-sized, mostly insectivorous
                or omnivorous bird in the order of Passerines in the genus
                Sialia of the thrush family (Turdidae). Bluebirds are one of the
                few thrush genera in the Americas
              </p>
            </div>
          </Content>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(materialStyles)(AdditionalInfo);
