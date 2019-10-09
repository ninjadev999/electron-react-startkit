import React from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material';
import ContactContainer from '../../containers/ContactContainer';

class SideBarModal extends React.Component<Props> {
  render() {
    const { open, contactId, onClose, classes } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={onClose}
      >
        <div className={classes.paper}>
          <ContactContainer contactId={contactId} />
        </div>
      </Modal>
    );
  }
}

export default withStyles(materialStyles)(SideBarModal);
