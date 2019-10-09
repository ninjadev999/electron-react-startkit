import React from 'react';
import compose from 'recompose/compose';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import withWidth from '@material-ui/core/withWidth';
import { Avatar } from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material';

const logoImage = require('../../../resources/icon.png');
const avatarImage = require('../../../resources/images/Michelle_Borromeo_Actor_Headshots_30.jpg');

class LeftSideBar extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        // className={clsx(classes.drawer, { [classes.drawerClose]: true })}
        classes={{
          paper: clsx(
            { [classes.drawerClose]: true },
            classes.homeDrawerBackgrandColor
          )
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <List className={classes.leftSideBarBrand}>
            <ListItem button>
              <ListItemIcon>
                <img
                  className={classes.leftSideBarBrand}
                  alt="Logo"
                  src={logoImage}
                />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <Divider />
        <List className={classes.leftSideBarSelectItems}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List className={classes.leftSideBarAvatar}>
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="Tesha" src={avatarImage} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default compose(
  withStyles(materialStyles, { withTheme: true }),
  withWidth()
)(LeftSideBar);
