import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { materialStyles } from '../../styles/material';

const logoImage = require('../../../resources/icon.png');

class DroplrHeader extends Component {
  static defaultProps = {
    logout: () => {},
    history: () => {},
    onChangeMenu: () => {},
    auth: {},
    profile: {},
    classes: {}
  };

  state = {
    open: false
  };

  hanldeClickLogout = () => {
    const { logout, history, auth } = this.props;
    logout(auth.access.token);
    history.push('/login');
  };

  handleClickLogin = () => {
    const { history } = this.props;
    history.push('/login');
  };

  handleClickSignUp = () => {
    const { history } = this.props;
    history.push('/sign-up');
  };

  renderTopbarMenuItem(title, link) {
    const { classes } = this.props;
    return (
      <Link
        to={link}
        style={{ display: 'inline-block', textDecorationLine: 'none' }}
      >
        <Typography
          className={classNames(
            classes.menuItemText,
            classes.topbarMenuItemTitle,
            classes.topbarDynamicShow
          )}
        >
          {title}
        </Typography>
      </Link>
    );
  }

  renderDrawerListItem(title, key) {
    return (
      <div>
        <ListItem button onClick={() => this.handleClickListItem(key)}>
          <ListItemText primary={title} />
        </ListItem>
      </div>
    );
  }

  handleClickListItem = key => {
    this.setState({ open: false }, () => {
      const { onChangeMenu } = this.props;
      if (onChangeMenu) onChangeMenu({ key });
    });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSearch();
    }
  };

  render() {
    const { auth, profile, classes } = this.props;
    const { open } = this.state;
    const loggedIn = auth && auth.access && auth.access.email;
    let username = '';

    if (loggedIn) {
      if (profile) {
        username = profile.first_name;
        if (username !== '')
          username = username.charAt(0).toUpperCase() + username.slice(1);
      }
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.appBar}>
            <Hidden only={['xl', 'lg']}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.drawerMenuButton,
                  open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden only={['md', 'sm', 'xs']}>
              <Typography
                className={classNames(
                  classes.brandTitle,
                  classes.topbarDynamicShow
                )}
              >
                {'Droplr'}
              </Typography>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            <img
              className={classes.drawerBandImage}
              alt="Logo"
              src={logoImage}
            />
            <IconButton onClick={this.handleDrawerClose}>
              {<ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{this.renderDrawerListItem('Productions', 'productions')}</List>
        </Drawer>
      </div>
    );
  }
}

DroplrHeader.propTypes = {
  logout: PropTypes.func,
  history: PropTypes.func,
  onChangeMenu: PropTypes.func,
  auth: PropTypes.objectOf(PropTypes.object),
  profile: PropTypes.objectOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.object)
};

export default compose(
  withStyles(materialStyles, { withTheme: true }),
  withWidth()
)(DroplrHeader);
