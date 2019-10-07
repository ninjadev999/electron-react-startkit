import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { FormControl } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../styles/material/index';
import Spacer from '../common/material/Spacer';

class Login extends React.Component<Props> {
  static defaultProps = {
    isAuthenticated: false,
    // member:{},
    // user: {},
    login: () => {},
    history: () => {},
    classes: {}
  };

  state = {
    email: '',
    password: ''
  };

  componentWillMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.push('/');
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const { email, password } = this.state;
      const { login } = this.props;
      login(email, password);
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password);
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={[classes.paper, classes.loginPaper]}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Spacer size={30} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">Login</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <Grid container spacing={16}>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={() => this.handleChange('email')}
                        fullWidth
                        autoFocus
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        value={password}
                        onChange={() => this.handleChange('password')}
                        fullWidth
                        autoFocus
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox id="remember" color="primary" />}
                        label={
                          <Typography className={classes.adminGeneralText}>
                            Remember Me
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Spacer size={30} />
                    </Grid>
                    <Grid item sm={1} xs={12} />
                    <Grid item sm={4} xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        focusVisible
                        onClick={() => this.handleSubmit()}
                      >
                        Log In
                      </Button>
                    </Grid>
                    <Grid item sm={2} xs={12} />
                    <Grid item sm={4} xs={12}>
                      <Link to="#">
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          focusVisible
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item sm={1} xs={12} />
                    <Grid item xs={12}>
                      <Spacer size={30} />
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  // member: PropTypes.objectOf(PropTypes.object),
  isAuthenticated: PropTypes.bool,
  // user: PropTypes.objectOf(PropTypes.object),
  login: PropTypes.func,
  history: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.object)
};

export default withStyles(materialStyles)(Login);
