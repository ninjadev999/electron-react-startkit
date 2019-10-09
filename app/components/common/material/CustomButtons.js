import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const PrimaryButton = withStyles({
  root: {
    width: 86,
    border: 0,
    height: 35,
    color: '#4749A0',
    fontSize: 12,
    backgroundColor: '#e0e0e0',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 6px',
    borderColor: '#e0e0e0',
    fontFamily: 'CircularStd-Book',
    borderRadidus: '10%',
    '&:hover': {
      backgroundColor: '#bdbdbd',
      borderColor: '#bdbdbd',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#e0e0e0',
      borderColor: '#e0e0e0'
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }
})(Button);

export const SecondaryButton = withStyles({
  root: {
    width: 86,
    border: 0,
    height: 35,
    color: '#FF7E5C',
    fontSize: 12,
    backgroundColor: '#F5E8E4',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 6px',
    borderColor: '#F5E8E4',
    fontFamily: 'CircularStd-Book',
    borderRadidus: '10%',
    '&:hover': {
      backgroundColor: '#f7dbd2',
      borderColor: '#f7dbd2',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#F5E8E4',
      borderColor: '#F5E8E4'
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }
})(Button);
