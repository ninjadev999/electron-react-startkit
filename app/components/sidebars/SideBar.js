import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material';
import ContactContainer from '../../containers/ContactContainer';

class SideBar extends React.Component<Props> {
  render() {
    const { open, contactId, onClose, classes } = this.props;
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <div className={classes.modalPaper}>
          <ContactContainer contactId={contactId} />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(materialStyles)(SideBar);
